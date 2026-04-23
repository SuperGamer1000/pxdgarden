/**
 * PXD Garden — Companion Planting Engine
 * Core logic for pairing recommendations and garden analysis
 */

import { getPlantById } from '../data/plants.js';
import {
    getRelationship,
    getCompanions,
    hasConflict,
    isBeneficial,
    RELATIONSHIP
} from '../data/companionRules.js';
import { getReasonLabel, generateMicrocopyI18n, getSeasonalTipI18n, t, getPlantName } from '../data/translations.js';

/**
 * Seasonal tips configuration
 */
// Use translations instead of hardcoded seasonal tips

/**
 * Get plant status based on relationships
 * @param {string} plantInstanceId - The placed plant instance ID
 * @param {Array} placedPlants - All placed plants
 * @returns {string} 'optimal' | 'warning' | 'conflict' | 'neutral'
 */
export function getPlantStatus(plantInstanceId, placedPlants) {
    const thisPlant = placedPlants.find(p => p.id === plantInstanceId);
    if (!thisPlant) return 'neutral';

    let hasConflictStatus = false;
    let hasBeneficial = false;

    placedPlants.forEach(other => {
        if (other.id === plantInstanceId) return;

        if (hasConflict(thisPlant.plantId, other.plantId)) {
            hasConflictStatus = true;
        }
        if (isBeneficial(thisPlant.plantId, other.plantId)) {
            hasBeneficial = true;
        }
    });

    if (hasConflictStatus) return 'conflict';
    if (hasBeneficial) return 'optimal';
    return 'neutral';
}

/**
 * Get relationship lines data for visualization
 * @param {Array} placedPlants - All placed plants
 * @returns {Array} Lines to draw
 */
export function getRelationshipLines(placedPlants) {
    const lines = [];

    for (let i = 0; i < placedPlants.length; i++) {
        for (let j = i + 1; j < placedPlants.length; j++) {
            const plantA = placedPlants[i];
            const plantB = placedPlants[j];

            const relationship = getRelationship(plantA.plantId, plantB.plantId);

            if (relationship) {
                lines.push({
                    from: plantA.position,
                    to: plantB.position,
                    type: relationship.relationship,
                    plantAId: plantA.id,
                    plantBId: plantB.id
                });
            }
        }
    }

    return lines;
}

/**
 * Get seasonal tip data
 */
export function getSeasonalTip(season) {
    const s = season || 'summer';
    const icons = { spring: '🌸', summer: '☀️', autumn: '🍂', winter: '❄️' };
    return {
        title: icons[s] + ' ' + t(s) + ' ' + t('tips'),
        icon: icons[s],
        tip: getSeasonalTipI18n(s)
    };
}

/**
 * Get human-readable reasons list
 */
export function formatReasons(reasons) {
    if (!reasons) return [];
    return reasons.map(r => getReasonLabel(r));
}

/**
 * Generate PXD-style microcopy for a relationship
 */
export function generateMicrocopy(plantAId, plantBId, relationship) {
    const plantDataA = getPlantById(plantAId);
    const plantDataB = getPlantById(plantBId);

    if (!plantDataA || !plantDataB) {
        return t('noPairingInfo');
    }

    const reasons = relationship ? (relationship.reasons || []) : [];
    const type = relationship ? relationship.relationship : 'neutral';
    
    return generateMicrocopyI18n(getPlantName(plantDataA), getPlantName(plantDataB), type, reasons);
}

// Re-export for convenience
export { getCompanions, getRelationship, hasConflict, isBeneficial, RELATIONSHIP };
