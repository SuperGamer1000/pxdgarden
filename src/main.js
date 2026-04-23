/**
 * PXD Garden — Main Application
 * Interactive companion planting garden planner
 */

import './style.css';
import { plants, getPlantById, getPlantsByCategory, searchPlants, getPlantSeasonalTip } from './data/plants.js';
import {
  getPlantStatus,
  getRelationshipLines,
  getSeasonalTip,
  generateMicrocopy,
  formatReasons,
  getCompanions,
  getRelationship,
  RELATIONSHIP
} from './engine/companionEngine.js';
import { calculateWaterNeeds, getWeatherAdvice } from './engine/waterCalculator.js';
import {
  t, getPlantName, getPlantDescription, getReasonLabel,
  getLanguage, setLanguage
} from './data/translations.js';


// ===== Application State =====
const state = {
  season: 'summer',
  gardenType: 'container',
  sunlight: 'full',
  weather: 'warm',
  soilType: 'loamy',
  category: 'all',
  searchQuery: '',
  placedPlants: [],
  selectedPlant: null,
  draggedPlant: null,
  gridCols: 8,
  gridRows: 6,

  // Multiple gardens
  currentGardenId: null,
  gardens: {} // { id: { id, name, placedPlants, gridCols, gridRows } }
};

// Generate unique IDs
let idCounter = 0;
function generateId() {
  return `plant-${Date.now()}-${++idCounter}`;
}

function generateGardenId() {
  return `garden-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// ===== LocalStorage Persistence =====
const STORAGE_KEY = 'pxd-garden-gardens';

function saveGarden() {
  try {
    // Sync current state back into the gardens map
    if (state.currentGardenId && state.gardens[state.currentGardenId]) {
      state.gardens[state.currentGardenId].placedPlants = state.placedPlants;
      state.gardens[state.currentGardenId].gridCols = state.gridCols;
      state.gardens[state.currentGardenId].gridRows = state.gridRows;
    }
    const data = {
      currentGardenId: state.currentGardenId,
      gardens: state.gardens,
      season: state.season
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Could not save garden:', e);
  }
}

function loadGarden() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.gardens && typeof data.gardens === 'object' && Object.keys(data.gardens).length > 0) {
        state.gardens = data.gardens;
        state.currentGardenId = data.currentGardenId || Object.keys(data.gardens)[0];
      }
      if (data.season) {
        state.season = data.season;
        document.querySelectorAll('.season-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.season === state.season);
        });
      }
    }

    // Migrate legacy single-garden data
    if (Object.keys(state.gardens).length === 0) {
      const legacyRaw = localStorage.getItem('pxd-garden-state');
      let legacyPlants = [];
      let legacyCols = 8;
      let legacyRows = 6;
      if (legacyRaw) {
        try {
          const legacy = JSON.parse(legacyRaw);
          if (legacy.placedPlants && Array.isArray(legacy.placedPlants)) {
            legacyPlants = legacy.placedPlants;
          }
          if (legacy.gridCols) legacyCols = legacy.gridCols;
          if (legacy.gridRows) legacyRows = legacy.gridRows;
          if (legacy.season) {
            state.season = legacy.season;
            document.querySelectorAll('.season-btn').forEach(b => {
              b.classList.toggle('active', b.dataset.season === state.season);
            });
          }
        } catch (_) { /* ignore */ }
      }
      // Create the default garden
      const defaultId = generateGardenId();
      state.gardens[defaultId] = {
        id: defaultId,
        name: 'My Garden',
        placedPlants: legacyPlants,
        gridCols: legacyCols,
        gridRows: legacyRows
      };
      state.currentGardenId = defaultId;
    }

    // Load current garden into active state
    loadGardenIntoState(state.currentGardenId);
  } catch (e) {
    console.warn('Could not load garden:', e);
  }
}

function loadGardenIntoState(gardenId) {
  const garden = state.gardens[gardenId];
  if (!garden) return;
  state.currentGardenId = gardenId;
  state.placedPlants = garden.placedPlants || [];
  state.gridCols = garden.gridCols || 8;
  state.gridRows = garden.gridRows || 6;
  state.selectedPlant = null;
  // Restore idCounter
  if (state.placedPlants.length > 0) {
    idCounter = state.placedPlants.length + 1;
  }
}

// ===== Multiple Garden Management =====
function createGarden(name) {
  const id = generateGardenId();
  state.gardens[id] = {
    id,
    name: name || `Garden ${Object.keys(state.gardens).length + 1}`,
    placedPlants: [],
    gridCols: 8,
    gridRows: 6
  };
  switchGarden(id);
  return id;
}

function switchGarden(gardenId) {
  if (!state.gardens[gardenId]) return;
  // Save current garden first
  if (state.currentGardenId && state.gardens[state.currentGardenId]) {
    state.gardens[state.currentGardenId].placedPlants = state.placedPlants;
    state.gardens[state.currentGardenId].gridCols = state.gridCols;
    state.gardens[state.currentGardenId].gridRows = state.gridRows;
  }
  loadGardenIntoState(gardenId);
  initializeGrid();
  renderPlacedPlants();
  updateGardenAnalysis();
  updateEmptyState();
  updateInfoPanel();
  renderGardenSelector();
  saveGarden();
}

function deleteGarden(gardenId) {
  const ids = Object.keys(state.gardens);
  if (ids.length <= 1) return; // never delete last garden
  delete state.gardens[gardenId];
  if (state.currentGardenId === gardenId) {
    const remaining = Object.keys(state.gardens);
    switchGarden(remaining[0]);
  } else {
    renderGardenSelector();
    saveGarden();
  }
}

function renameGarden(gardenId, newName) {
  if (!state.gardens[gardenId]) return;
  state.gardens[gardenId].name = newName || 'Unnamed Garden';
  renderGardenSelector();
  saveGarden();
}

function renderGardenSelector() {
  const container = document.getElementById('garden-selector');
  if (!container) return;

  const ids = Object.keys(state.gardens);
  const currentGarden = state.gardens[state.currentGardenId];

  container.innerHTML = `
    <select id="garden-select" class="toolbar-select garden-select" title="Switch garden">
      ${ids.map(id => {
    const g = state.gardens[id];
    return `<option value="${id}" ${id === state.currentGardenId ? 'selected' : ''}>${g.name}</option>`;
  }).join('')}
    </select>
    <button id="new-garden-btn" class="btn btn-garden-action" title="New garden">＋ New</button>
    <button id="rename-garden-btn" class="btn btn-garden-action" title="Rename garden">✏️</button>
    ${ids.length > 1 ? `<button id="delete-garden-btn" class="btn btn-garden-action btn-garden-delete" title="Delete garden">🗑️</button>` : ''}
  `;

  // Event: switch garden
  const select = container.querySelector('#garden-select');
  if (select) {
    select.addEventListener('change', (e) => switchGarden(e.target.value));
  }

  // Event: create new garden
  const newBtn = container.querySelector('#new-garden-btn');
  if (newBtn) {
    newBtn.addEventListener('click', () => {
      const name = prompt(t('newGardenPrompt'), `Garden ${ids.length + 1}`);
      if (name !== null) createGarden(name);
    });
  }

  // Event: rename current garden
  const renameBtn = container.querySelector('#rename-garden-btn');
  if (renameBtn) {
    renameBtn.addEventListener('click', () => {
      const name = prompt(t('renameGardenPrompt'), currentGarden?.name || '');
      if (name !== null) renameGarden(state.currentGardenId, name);
    });
  }

  // Event: delete current garden
  const deleteBtn = container.querySelector('#delete-garden-btn');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      if (confirm(t('deleteConfirm').replace('{name}', currentGarden?.name))) {
        deleteGarden(state.currentGardenId);
      }
    });
  }
}

// ===== Language =====
function initializeLanguage() {
  const savedLang = localStorage.getItem('pxd-garden-lang') || 'en';
  setLanguage(savedLang);
  updateLanguageUI();
}

function toggleLanguage() {
  const nextLang = getLanguage() === 'en' ? 'el' : 'en';
  setLanguage(nextLang);
  localStorage.setItem('pxd-garden-lang', nextLang);
  updateLanguageUI();
  
  // Re-render everything
  renderPlantCatalog();
  renderPlacedPlants();
  updateInfoPanel();
  renderGardenSelector();
  updateSeasonalTips();
  updateEmptyState();
}

function updateLanguageUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = getLanguage() === 'el' ? 'EN' : 'ΕΛ';
    langBtn.title = t('switchLang');
    langBtn.setAttribute('aria-label', t('switchLang'));
  }
}

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  initializeLanguage();
  loadGarden();
  initializeGrid();
  renderPlantCatalog();
  setupEventListeners();
  renderPlacedPlants();
  updateSeasonalTips();
  updateEmptyState();
  renderGardenSelector();
});

// ===== Theme / Night Mode =====
function initializeTheme() {
  const saved = localStorage.getItem('pxd-garden-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';

  if (next === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  localStorage.setItem('pxd-garden-theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to night mode';
  }
}

// ===== Grid Initialization =====
function initializeGrid() {
  const grid = document.getElementById('garden-grid');
  if (!grid) return;

  // Set CSS variables for grid sizing
  grid.style.setProperty('--grid-cols', state.gridCols);
  grid.style.setProperty('--grid-rows', state.gridRows);

  grid.innerHTML = '';

  for (let row = 0; row < state.gridRows; row++) {
    for (let col = 0; col < state.gridCols; col++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.dataset.row = row;
      cell.dataset.col = col;

      cell.addEventListener('dragover', handleDragOver);
      cell.addEventListener('dragleave', handleDragLeave);
      cell.addEventListener('drop', handleDrop);
      cell.addEventListener('click', handleCellClick);

      grid.appendChild(cell);
    }
  }

  // Grid-level drag events for repositioning placed plants
  grid.addEventListener('dragstart', handlePlantDragStart);
  grid.addEventListener('dragend', handlePlantDragEnd);
}

// ===== Plant Catalog Rendering =====
function renderPlantCatalog() {
  const container = document.getElementById('plant-list');
  if (!container) return;

  let plantsToShow = [...plants];

  // Filter by category
  if (state.category !== 'all') {
    plantsToShow = getPlantsByCategory(state.category);
  }

  // Filter by search
  if (state.searchQuery) {
    plantsToShow = searchPlants(state.searchQuery).filter(p =>
      state.category === 'all' || p.category === state.category
    );
  }

  // Filter by season
  plantsToShow = plantsToShow.filter(p => p.seasons.includes(state.season));

  if (plantsToShow.length === 0) {
    container.innerHTML = `
      <div class="guide-intro">
        <p>${t('noPlants').replace('{season}', t(state.season))}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = plantsToShow.map(plant => `
    <div class="plant-card" 
         draggable="true" 
         data-plant-id="${plant.id}"
         title="${getPlantDescription(plant)}">
      <span class="plant-emoji">${plant.icon}</span>
      <div class="plant-info">
        <div class="plant-name">${getPlantName(plant)}</div>
        <div class="plant-meta">${plant.daysToHarvest} ${t('days')} • ${t(plant.sunlight === 'full' ? 'fullSun' : (plant.sunlight === 'partial' ? 'partial' : 'shade'))}</div>
      </div>
      <button class="plant-add-btn" aria-label="Add ${getPlantName(plant)} to garden">+</button>
    </div>
  `).join('');

  // Add drag events to plant cards
  container.querySelectorAll('.plant-card').forEach(card => {
    card.addEventListener('dragstart', handlePlantDragStart);
    card.addEventListener('dragend', handlePlantDragEnd);
  });

  // Add click events to add buttons
  container.querySelectorAll('.plant-add-btn').forEach(btn => {
    btn.addEventListener('click', handleQuickAdd);
  });
}

// ===== Event Handlers =====
function setupEventListeners() {
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }

  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }


  // Season selector
  document.querySelectorAll('.season-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.season-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.season = e.target.dataset.season;
      renderPlantCatalog();
      updateSeasonalTips();
      updateGardenAnalysis();
      saveGarden();
    });
  });

  // Category filter
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      state.category = e.target.dataset.category;
      renderPlantCatalog();
    });
  });

  // Search
  const searchInput = document.getElementById('plant-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderPlantCatalog();
    });
  }

  // Clear garden
  const clearBtn = document.getElementById('clear-garden');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (state.placedPlants.length === 0) return;
      if (confirm(t('clearConfirm'))) {
        state.placedPlants = [];
        state.selectedPlant = null;
        renderPlacedPlants();
        updateGardenAnalysis();
        updateEmptyState();
        saveGarden();
      }
    });
  }

  // Click outside to deselect
  const canvas = document.getElementById('garden-canvas');
  if (canvas) {
    canvas.addEventListener('click', (e) => {
      if (e.target.classList.contains('garden-canvas') ||
        e.target.classList.contains('garden-grid') ||
        e.target.classList.contains('grid-cell')) {
        if (!e.target.classList.contains('occupied')) {
          deselectPlant();
        }
      }
    });
  }
}

// ===== Drag and Drop =====
function handlePlantDragStart(e) {
  // Catalog card drag
  const card = e.target.closest('.plant-card');
  if (card) {
    const plantId = card.dataset.plantId;
    state.draggedPlant = { type: 'catalog', plantId };
    card.classList.add('dragging');
    e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'catalog', plantId }));
    e.dataTransfer.effectAllowed = 'copyMove';
    return;
  }

  // Placed plant drag (reposition)
  const placed = e.target.closest('.placed-plant');
  if (placed) {
    const instanceId = placed.dataset.instanceId;
    const instance = state.placedPlants.find(p => p.id === instanceId);
    if (!instance) return;
    state.draggedPlant = { type: 'grid', instanceId, plantId: instance.plantId };
    placed.classList.add('dragging');
    e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'grid', instanceId }));
    e.dataTransfer.effectAllowed = 'move';
  }
}

function handlePlantDragEnd(e) {
  const card = e.target.closest('.plant-card');
  if (card) card.classList.remove('dragging');
  const placed = e.target.closest('.placed-plant');
  if (placed) placed.classList.remove('dragging');
  state.draggedPlant = null;
  document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.classList.remove('drag-over');
  });
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = state.draggedPlant?.type === 'grid' ? 'move' : 'copy';

  const cell = e.target.closest('.grid-cell');
  if (cell) {
    // Allow drop on any cell (empty for place/move, occupied for swap)
    cell.classList.add('drag-over');
  }
}

function handleDragLeave(e) {
  const cell = e.target.closest('.grid-cell');
  if (cell) {
    cell.classList.remove('drag-over');
  }
}

function handleDrop(e) {
  e.preventDefault();
  const cell = e.target.closest('.grid-cell');
  if (!cell) return;

  cell.classList.remove('drag-over');

  const row = parseInt(cell.dataset.row);
  const col = parseInt(cell.dataset.col);

  let dragData;
  try {
    dragData = JSON.parse(e.dataTransfer.getData('text/plain'));
  } catch {
    // Legacy fallback for plain text plantId
    const plantId = e.dataTransfer.getData('text/plain');
    if (plantId) dragData = { type: 'catalog', plantId };
    else return;
  }

  const occupant = state.placedPlants.find(p =>
    p.position.row === row && p.position.col === col
  );

  if (dragData.type === 'grid') {
    // Moving a placed plant
    const instance = state.placedPlants.find(p => p.id === dragData.instanceId);
    if (!instance) return;

    // Don't drop on same cell
    if (instance.position.row === row && instance.position.col === col) return;

    if (occupant) {
      // Swap positions
      const oldPos = { ...instance.position };
      instance.position = { row, col };
      occupant.position = oldPos;
    } else {
      // Move to empty cell
      instance.position = { row, col };
    }

    renderPlacedPlants();
    updateInfoPanel();
    updateEmptyState();
    saveGarden();
  } else if (dragData.type === 'catalog') {
    if (occupant) {
      showTooltip(cell, t('cellOccupied'), 'warning');
      return;
    }
    addPlantToGarden(dragData.plantId, { row, col });
  }
}

function handleCellClick(e) {
  // Don't handle if clicking on a placed plant
  if (e.target.closest('.placed-plant')) return;

  const cell = e.target.closest('.grid-cell');
  if (!cell || cell.classList.contains('occupied')) return;
}

function handleQuickAdd(e) {
  e.stopPropagation();
  const card = e.target.closest('.plant-card');
  if (!card) return;

  const plantId = card.dataset.plantId;

  // Find first empty cell
  for (let row = 0; row < state.gridRows; row++) {
    for (let col = 0; col < state.gridCols; col++) {
      const occupied = state.placedPlants.find(p =>
        p.position.row === row && p.position.col === col
      );
      if (!occupied) {
        addPlantToGarden(plantId, { row, col });
        return;
      }
    }
  }

  // No empty cells
  showTooltip(card, t('gardenFull'), 'warning');
}

// ===== Plant Management =====
function addPlantToGarden(plantId, position) {
  const id = generateId();
  const placedPlant = {
    id,
    plantId,
    position,
    gardenType: state.gardenType,
    soilType: state.soilType,
    sunlight: state.sunlight,
    weather: state.weather
  };

  state.placedPlants.push(placedPlant);
  renderPlacedPlants();
  updateGardenAnalysis();
  updateEmptyState();
  selectPlant(id);
  saveGarden();
}

function removePlant(instanceId) {
  hideTooltip();
  state.placedPlants = state.placedPlants.filter(p => p.id !== instanceId);
  if (state.selectedPlant === instanceId) {
    state.selectedPlant = null;
  }
  renderPlacedPlants();
  updateGardenAnalysis();
  updateEmptyState();
  updateInfoPanel();
  saveGarden();
}

function selectPlant(instanceId) {
  state.selectedPlant = instanceId;
  renderPlacedPlants();
  updateInfoPanel();
}

function deselectPlant() {
  state.selectedPlant = null;
  renderPlacedPlants();
  updateInfoPanel();
}

// ===== Rendering =====
function renderPlacedPlants() {
  // Clear existing placed plants (but keep grid cells)
  document.querySelectorAll('.placed-plant').forEach(el => el.remove());

  // Reset cell states and clear placed plant elements
  document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.classList.remove('occupied');
    cell.innerHTML = ''; // Clear any existing plant in cell
  });

  // Render each placed plant inside its grid cell
  state.placedPlants.forEach(placed => {
    const plant = getPlantById(placed.plantId);
    if (!plant) return;

    const status = getPlantStatus(placed.id, state.placedPlants);
    const isSelected = state.selectedPlant === placed.id;

    // Find the cell for this plant
    const cell = document.querySelector(
      `[data-row="${placed.position.row}"][data-col="${placed.position.col}"]`
    );
    if (!cell) return;

    cell.classList.add('occupied');

    // Create plant element
    const el = document.createElement('div');
    el.className = `placed-plant ${status}${isSelected ? ' selected' : ''}`;
    el.dataset.instanceId = placed.id;
    el.draggable = true;
    el.style.cursor = 'grab';

    // Status icon
    let statusIcon = '';
    if (status === 'optimal') statusIcon = '<span class="placed-plant-status">✓</span>';
    if (status === 'warning' || status === 'conflict') statusIcon = '<span class="placed-plant-status">⚠️</span>';

    el.innerHTML = `
      <button class="placed-plant-remove" aria-label="Remove ${getPlantName(plant)}">×</button>
      ${statusIcon}
      <span class="placed-plant-emoji">${plant.icon}</span>
      <span class="placed-plant-name">${getPlantName(plant)}</span>
    `;

    // Event listeners
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      selectPlant(placed.id);
    });

    el.querySelector('.placed-plant-remove').addEventListener('click', (e) => {
      e.stopPropagation();
      removePlant(placed.id);
    });

    // Show tooltip on hover
    el.addEventListener('mouseenter', () => {
      if (status !== 'neutral') {
        const message = getStatusMessage(placed.id, status);
        if (message) showTooltip(el, message, status);
      } else {
        showTooltip(el, `${getPlantName(plant)} — ${getPlantDescription(plant)}`, 'info');
      }
    });

    el.addEventListener('mouseleave', () => {
      hideTooltip();
    });

    // Append plant to its cell
    cell.appendChild(el);
  });

  // Draw relationship lines
  renderPairingLines();
}

function renderPairingLines() {
  const svg = document.getElementById('pairing-lines');
  if (!svg) return;

  const lines = getRelationshipLines(state.placedPlants);
  const grid = document.getElementById('garden-grid');
  if (!grid) return;

  svg.innerHTML = lines.map(line => {
    // Get actual cell positions from DOM
    const cellFrom = document.querySelector(
      `[data-row="${line.from.row}"][data-col="${line.from.col}"]`
    );
    const cellTo = document.querySelector(
      `[data-row="${line.to.row}"][data-col="${line.to.col}"]`
    );

    if (!cellFrom || !cellTo) return '';

    const gridRect = grid.getBoundingClientRect();
    const fromRect = cellFrom.getBoundingClientRect();
    const toRect = cellTo.getBoundingClientRect();

    const x1 = fromRect.left - gridRect.left + fromRect.width / 2;
    const y1 = fromRect.top - gridRect.top + fromRect.height / 2;
    const x2 = toRect.left - gridRect.left + toRect.width / 2;
    const y2 = toRect.top - gridRect.top + toRect.height / 2;

    const type = line.type === RELATIONSHIP.BENEFICIAL ? 'beneficial' : 'avoid';

    return `<line class="pairing-line ${type}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
  }).join('');
}

function updateEmptyState() {
  const emptyState = document.getElementById('garden-empty');
  if (!emptyState) return;

  if (state.placedPlants.length > 0) {
    emptyState.classList.add('hidden');
  } else {
    emptyState.classList.remove('hidden');
  }
}

// ===== Info Panel =====
function updateInfoPanel() {
  const content = document.getElementById('panel-content');
  if (!content) return;

  if (!state.selectedPlant) {
    content.innerHTML = `
      <div class="guide-intro">
        <p>${t('selectPlantHint')}</p>
      </div>
    `;
    return;
  }

  const placed = state.placedPlants.find(p => p.id === state.selectedPlant);
  if (!placed) return;

  const plant = getPlantById(placed.plantId);
  if (!plant) return;

  const companions = getCompanions(placed.plantId);

  let html = `
    <div class="selected-plant-header" style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding: 16px; background: var(--neutral-50); border-radius: 12px;">
      <span style="font-size: 2.5rem;">${plant.icon}</span>
      <div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: var(--neutral-800);">${getPlantName(plant)}</h3>
        <p style="font-size: 0.875rem; color: var(--neutral-500);">${getPlantDescription(plant)}</p>
      </div>
    </div>
  `;

  // Per-plant growing conditions
  html += `
    <div class="companion-section">
      <h4>${t('growingConditions')}</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
        <label style="font-size: 0.7rem; color: var(--neutral-500);">${t('gardenType')}</label>
        <label style="font-size: 0.7rem; color: var(--neutral-500);">${t('sunlight')}</label>
        <select class="toolbar-select" data-per-plant="gardenType" style="font-size: 0.8rem;">
          <option value="container" ${placed.gardenType === 'container' ? 'selected' : ''}>${t('container')}</option>
          <option value="raised-bed" ${placed.gardenType === 'raised-bed' ? 'selected' : ''}>${t('raisedBed')}</option>
          <option value="ground" ${placed.gardenType === 'ground' ? 'selected' : ''}>${t('inGround')}</option>
        </select>
        <select class="toolbar-select" data-per-plant="sunlight" style="font-size: 0.8rem;">
          <option value="full" ${placed.sunlight === 'full' ? 'selected' : ''}>${t('fullSun')}</option>
          <option value="partial" ${placed.sunlight === 'partial' ? 'selected' : ''}>${t('partial')}</option>
          <option value="shade" ${placed.sunlight === 'shade' ? 'selected' : ''}>${t('shade')}</option>
        </select>
        <label style="font-size: 0.7rem; color: var(--neutral-500);">${t('weather')}</label>
        <label style="font-size: 0.7rem; color: var(--neutral-500);">${t('soil')}</label>
        <select class="toolbar-select" data-per-plant="weather" style="font-size: 0.8rem;">
          <option value="hot" ${placed.weather === 'hot' ? 'selected' : ''}>${t('hot')}</option>
          <option value="warm" ${placed.weather === 'warm' ? 'selected' : ''}>${t('warm')}</option>
          <option value="mild" ${placed.weather === 'mild' ? 'selected' : ''}>${t('mild')}</option>
          <option value="cool" ${placed.weather === 'cool' ? 'selected' : ''}>${t('cool')}</option>
          <option value="cold" ${placed.weather === 'cold' ? 'selected' : ''}>${t('cold')}</option>
        </select>
        <select class="toolbar-select" data-per-plant="soilType" style="font-size: 0.8rem;">
          <option value="sandy" ${placed.soilType === 'sandy' ? 'selected' : ''}>${t('sandy')}</option>
          <option value="loamy" ${placed.soilType === 'loamy' ? 'selected' : ''}>${t('loamy')}</option>
          <option value="clay" ${placed.soilType === 'clay' ? 'selected' : ''}>${t('clay')}</option>
        </select>
      </div>
    </div>
  `;

  // Spacing info
  html += `
    <div class="spacing-info">
      <h4>${t('spacing')}</h4>
      <div class="spacing-value">${plant.spacing.ideal}${plant.spacing.unit}</div>
      <p class="spacing-note">${t('idealSpacing')}</p>
    </div>
  `;

  // Beneficial companions
  if (companions.beneficial.length > 0) {
    html += `
      <div class="companion-section">
        <h4>✓ Good Companions</h4>
        <div class="companion-list">
          ${companions.beneficial.slice(0, 5).map(c => {
      const companion = getPlantById(c.plantId);
      if (!companion) return '';
      const inGarden = state.placedPlants.some(p => p.plantId === c.plantId);
      return `
              <div class="companion-item beneficial" ${!inGarden ? 'style="opacity: 0.7;"' : ''}>
                <span class="companion-emoji">${companion.icon}</span>
                <div class="companion-info">
                  <div class="companion-name">${companion.name} ${inGarden ? '✓' : ''}</div>
                  <div class="companion-reason">${formatReasons(c.reasons).join(', ')}</div>
                </div>
              </div>
            `;
    }).join('')}
        </div>
      </div>
    `;
  }

  // Plants to avoid
  if (companions.avoid.length > 0) {
    html += `
      <div class="companion-section">
        <h4>${t('keepApart')}</h4>
        <div class="companion-list">
          ${companions.avoid.slice(0, 5).map(c => {
      const companion = getPlantById(c.plantId);
      if (!companion) return '';
      const inGarden = state.placedPlants.some(p => p.plantId === c.plantId);
      const microcopy = generateMicrocopyI18n(getPlantName(plant), getPlantName(companion), 'avoid', c.reasons);
      return `
              <div class="companion-item avoid" ${!inGarden ? 'style="opacity: 0.7;"' : ''}>
                <span class="companion-emoji">${companion.icon}</span>
                <div class="companion-info">
                  <div class="companion-name">${getPlantName(companion)} ${inGarden ? '⚠️' : ''}</div>
                  <div class="companion-reason">${microcopy || c.notes || ''}</div>
                </div>
              </div>
            `;
    }).join('')}
        </div>
      </div>
    `;
  }

  // Water Needs Section (all per-plant conditions)
  const waterContext = {
    season: state.season,
    gardenType: placed.gardenType || state.gardenType,
    sunlight: placed.sunlight || state.sunlight,
    weather: placed.weather || state.weather,
    soilType: placed.soilType || state.soilType
  };
  const waterNeeds = calculateWaterNeeds(placed.plantId, waterContext);

  html += `
    <div class="companion-section">
      <h4>${t('waterNeeds')}</h4>
      <div class="spacing-info" style="background: linear-gradient(135deg, hsl(200, 60%, 95%), hsl(210, 50%, 92%));">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
          <div class="spacing-value" style="color: hsl(200, 70%, 35%);">${waterNeeds.litersPerWeek}L/week</div>
          <span style="font-size: 0.875rem; color: var(--neutral-600);">${waterNeeds.frequency}</span>
        </div>
        <p class="spacing-note" style="margin-bottom: 8px;">${waterNeeds.patternDescription}</p>
        ${waterNeeds.tips.slice(0, 2).map(tip => `<p style="font-size: 0.75rem; color: var(--neutral-600); margin-top: 4px;">${tip}</p>`).join('')}
      </div>
    </div>
  `;

  // Plant-specific Seasonal Tip
  const plantSeasonalTip = getPlantSeasonalTip(placed.plantId, state.season);
  if (plantSeasonalTip) {
    const seasonIcons = { spring: '🌸', summer: '☀️', autumn: '🍂', winter: '❄️' };
    html += `
      <div class="companion-section">
        <h4>${seasonIcons[state.season]} ${t(state.season)} ${t('care')}</h4>
        <div style="padding: 12px; background: var(--neutral-50); border-radius: 8px; font-size: 0.875rem; line-height: 1.6; color: var(--neutral-700);">
          ${plantSeasonalTip}
        </div>
      </div>
    `;
  }

  content.innerHTML = html;

  // Per-plant growing conditions listeners
  content.querySelectorAll('[data-per-plant]').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const field = e.target.dataset.perPlant;
      placed[field] = e.target.value;
      updateInfoPanel();
      updateGardenAnalysis();
      saveGarden();
    });
  });
}

function updateSeasonalTips() {
  const container = document.getElementById('seasonal-tips');
  if (!container) return;

  const tip = getSeasonalTip(state.season);

  container.innerHTML = `
    <h4>${tip.icon} ${tip.title}</h4>
    <p>${tip.tip}</p>
  `;
}

function updateGardenAnalysis() {
  renderPlacedPlants();
  updateInfoPanel();
}

// ===== Utilities =====
function getStatusMessage(instanceId, status) {
  const placed = state.placedPlants.find(p => p.id === instanceId);
  if (!placed) return '';

  const plant = getPlantById(placed.plantId);
  if (!plant) return '';

  // Find the relationship causing this status
  for (const other of state.placedPlants) {
    if (other.id === instanceId) continue;

    const relationship = getRelationship(placed.plantId, other.plantId);
    if (relationship) {
      return generateMicrocopy(placed.plantId, other.plantId, relationship);
    }
  }

  return '';
}

// ===== Tooltip =====
function showTooltip(element, message, type = 'info') {
  const tooltip = document.getElementById('tooltip');
  if (!tooltip) return;

  const tooltipContent = tooltip.querySelector('.tooltip-content');
  if (tooltipContent) {
    tooltipContent.textContent = message;
  }

  tooltip.className = `tooltip visible ${type}`;

  const rect = element.getBoundingClientRect();
  tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
  tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip');
  if (tooltip) {
    tooltip.classList.remove('visible');
  }
}

// Export state for debugging
window.gardenState = state;
