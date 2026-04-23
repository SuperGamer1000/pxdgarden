/**
 * PXD Garden — Water Calculator
 * Dynamic water needs based on season, container type, weather, and plant type
 */

import { getPlantById } from '../data/plants.js';
import { getFrequencyDesc, getWateringTipI18n, getWeatherAdviceI18n, PATTERN_DESCS_I18N, getLanguage } from '../data/translations.js';

/**
 * Base multipliers for different factors
 */
const SEASON_MULTIPLIERS = {
    spring: 0.8,    // Mild temps, natural rainfall
    summer: 1.5,    // Hot, high evaporation
    autumn: 0.7,    // Cooling down
    winter: 0.3     // Low growth, minimal needs
};

const CONTAINER_MULTIPLIERS = {
    'container': 1.5,      // Dries out fastest
    'raised-bed': 1.1,     // Slightly faster drainage
    'ground': 1.0          // Base rate
};

const SUNLIGHT_MULTIPLIERS = {
    'full': 1.3,      // More evaporation
    'partial': 1.0,   // Moderate
    'shade': 0.7      // Less evaporation
};

const WEATHER_MULTIPLIERS = {
    'hot': 1.5,       // > 30°C / 86°F
    'warm': 1.2,      // 25-30°C / 77-86°F
    'mild': 1.0,      // 15-25°C / 59-77°F
    'cool': 0.7,      // 10-15°C / 50-59°F
    'cold': 0.4       // < 10°C / 50°F
};

const SOIL_MULTIPLIERS = {
    'sandy': 1.4,     // Drains fast
    'loamy': 1.0,     // Ideal balance
    'clay': 0.7       // Retains water
};

/**
 * Plant type hydration patterns
 */
const PLANT_TYPE_PATTERNS = {
    // Leafy greens need consistent moisture
    leafy: {
        plants: ['lettuce', 'spinach', 'kale', 'chard', 'cabbage'],
        pattern: 'frequent-light',
        description: 'Water lightly every 1-2 days to keep soil consistently moist'
    },
    // Fruiting plants need deep watering
    fruiting: {
        plants: ['tomato', 'pepper', 'cucumber', 'zucchini', 'eggplant', 'corn'],
        pattern: 'deep-infrequent',
        description: 'Water deeply 2-3 times per week, allowing soil to dry slightly between'
    },
    // Root vegetables need even moisture
    root: {
        plants: ['carrot', 'beet', 'radish', 'onion', 'garlic', 'potato', 'turnip', 'parsnip'],
        pattern: 'steady-moderate',
        description: 'Water moderately 2-3 times per week for even growth'
    },
    // Mediterranean herbs prefer dry conditions
    mediterranean: {
        plants: ['rosemary', 'thyme', 'oregano', 'lavender', 'sage'],
        pattern: 'sparse-drought-tolerant',
        description: 'Water only when soil is quite dry - every 7-10 days'
    },
    // Succulent herbs like some drought
    drought_tolerant: {
        plants: ['tarragon', 'fennel'],
        pattern: 'sparse',
        description: 'Drought tolerant once established, water weekly'
    },
    // Moisture-loving herbs
    moisture_loving: {
        plants: ['basil', 'cilantro', 'parsley', 'mint', 'chives', 'dill', 'lemonbalm', 'chamomile'],
        pattern: 'frequent-moderate',
        description: 'Keep soil evenly moist, water every 2-3 days'
    },
    // Legumes
    legumes: {
        plants: ['bean', 'pea'],
        pattern: 'moderate',
        description: 'Water 2-3 times weekly, especially during flowering and pod formation'
    },
    // Squash family
    cucurbits: {
        plants: ['zucchini', 'cucumber'],
        pattern: 'deep-consistent',
        description: 'Deep, consistent watering 2-3 times weekly. Water at base to avoid mildew'
    },
    // Flowers
    annual_flowers: {
        plants: ['marigold', 'nasturtium', 'zinnia', 'cosmos', 'petunia', 'alyssum', 'calendula'],
        pattern: 'moderate',
        description: 'Water when top inch of soil is dry, typically every 2-3 days'
    },
    perennial_flowers: {
        plants: ['sunflower', 'borage', 'echinacea', 'dahlia', 'sweetpeas'],
        pattern: 'deep-weekly',
        description: 'Water deeply once or twice weekly once established'
    }
};

/**
 * Calculate water needs for a plant
 * @param {string} plantId - Plant ID
 * @param {Object} context - { season, gardenType, sunlight, weather, soilType }
 * @returns {Object} Water calculation result
 */
export function calculateWaterNeeds(plantId, context = {}) {
    const plant = getPlantById(plantId);
    if (!plant) {
        return {
            litersPerWeek: 2,
            frequency: 'every 2-3 days',
            tips: 'Unknown plant - use standard watering'
        };
    }

    // Get base water amount from plant data
    const baseWater = plant.baseWaterLiters || 2;

    // Apply all multipliers
    const seasonMult = SEASON_MULTIPLIERS[context.season] || 1;
    const containerMult = CONTAINER_MULTIPLIERS[context.gardenType] || 1;
    const sunMult = SUNLIGHT_MULTIPLIERS[context.sunlight] || 1;
    const weatherMult = WEATHER_MULTIPLIERS[context.weather] || 1;
    const soilMult = SOIL_MULTIPLIERS[context.soilType] || 1;

    // Calculate total
    const totalMultiplier = seasonMult * containerMult * sunMult * weatherMult * soilMult;
    const adjustedWater = baseWater * totalMultiplier;

    // Get watering pattern
    const pattern = getWateringPattern(plantId);

    // Determine frequency based on adjusted amount and pattern
    const frequency = calculateFrequency(adjustedWater, pattern, context);

    // Generate tips
    const tips = generateWateringTips(plant, context, adjustedWater, pattern);

    const lang = getLanguage();
    const patternDescMap = PATTERN_DESCS_I18N[lang] || PATTERN_DESCS_I18N.en;
    
    return {
        plantId,
        plantName: getPlantById(plantId).name, // getPlantName not imported here, but it's ok main.js transforms it
        litersPerWeek: Math.round(adjustedWater * 10) / 10,
        litersPerWatering: Math.round((adjustedWater / frequency.timesPerWeek) * 10) / 10,
        frequency: frequency.description,
        timesPerWeek: frequency.timesPerWeek,
        pattern: pattern.pattern,
        patternDescription: patternDescMap[pattern.pattern] || patternDescMap.standard,
        tips,
        adjustments: {
            season: { name: context.season, multiplier: seasonMult },
            container: { name: context.gardenType, multiplier: containerMult },
            sunlight: { name: context.sunlight, multiplier: sunMult },
            weather: { name: context.weather, multiplier: weatherMult },
            soil: { name: context.soilType, multiplier: soilMult }
        }
    };
}

/**
 * Get watering pattern for a plant
 */
function getWateringPattern(plantId) {
    for (const [type, data] of Object.entries(PLANT_TYPE_PATTERNS)) {
        if (data.plants.includes(plantId)) {
            return { type, ...data };
        }
    }
    return {
        type: 'standard',
        pattern: 'moderate',
        description: 'Water when top inch of soil is dry'
    };
}

/**
 * Calculate watering frequency
 */
function calculateFrequency(weeklyLiters, pattern, context) {
    // Base times per week
    let timesPerWeek = 3;

    // Adjust based on pattern
    switch (pattern.pattern) {
        case 'frequent-light':
            timesPerWeek = context.season === 'summer' ? 7 : 5;
            break;
        case 'deep-infrequent':
            timesPerWeek = context.season === 'summer' ? 3 : 2;
            break;
        case 'steady-moderate':
            timesPerWeek = 3;
            break;
        case 'sparse-drought-tolerant':
            timesPerWeek = context.season === 'summer' ? 2 : 1;
            break;
        case 'sparse':
            timesPerWeek = 1;
            break;
        case 'frequent-moderate':
            timesPerWeek = context.season === 'summer' ? 5 : 3;
            break;
        case 'deep-consistent':
            timesPerWeek = 3;
            break;
        case 'deep-weekly':
            timesPerWeek = context.season === 'summer' ? 2 : 1;
            break;
        default:
            timesPerWeek = 3;
    }

    // Container plants need more frequent watering
    if (context.gardenType === 'container') {
        timesPerWeek = Math.min(7, Math.ceil(timesPerWeek * 1.5));
    }

    // Generate description
    const description = getFrequencyDesc(timesPerWeek);

    return { timesPerWeek, description };
}

/**
 * Generate watering tips based on context
 */
function generateWateringTips(plant, context, weeklyLiters, pattern) {
    const tips = [];

    if (context.season === 'summer') {
        tips.push(getWateringTipI18n('summer_morning'));
        if (context.gardenType === 'container') {
            tips.push(getWateringTipI18n('container_heatwave'));
        }
    }

    if (context.season === 'winter') {
        tips.push(getWateringTipI18n('winter_reduce'));
        tips.push(getWateringTipI18n('winter_morning'));
    }

    if (context.gardenType === 'container') {
        tips.push(getWateringTipI18n('container_finger'));
        tips.push(getWateringTipI18n('container_drainage'));
    }

    if (pattern.type === 'mediterranean') {
        tips.push(getWateringTipI18n('mediterranean_dry'));
        tips.push(getWateringTipI18n('mediterranean_rot'));
    }

    if (pattern.type === 'fruiting' || pattern.type === 'cucurbits') {
        tips.push(getWateringTipI18n('fruiting_rot'));
        tips.push(getWateringTipI18n('fruiting_base'));
    }

    if (pattern.type === 'leafy') {
        tips.push(getWateringTipI18n('leafy_moisture'));
        tips.push(getWateringTipI18n('leafy_mulch'));
    }

    if (plant.isHeavyFeeder) {
        tips.push(getWateringTipI18n('heavy_feeder'));
    }

    if (context.sunlight === 'full' && context.season === 'summer') {
        tips.push(getWateringTipI18n('full_sun_summer'));
    }

    return tips.slice(0, 4);
}

/**
 * Calculate water needs for entire garden
 * @param {Array} placedPlants - Array of placed plants
 * @param {Object} context - Garden context
 * @returns {Object} Total garden water needs
 */
export function calculateGardenWaterNeeds(placedPlants, context) {
    let totalWeekly = 0;
    const plantNeeds = [];

    placedPlants.forEach(placed => {
        const needs = calculateWaterNeeds(placed.plantId, context);
        totalWeekly += needs.litersPerWeek;
        plantNeeds.push(needs);
    });

    // Group by watering frequency
    const frequencyGroups = {};
    plantNeeds.forEach(need => {
        if (!frequencyGroups[need.frequency]) {
            frequencyGroups[need.frequency] = [];
        }
        frequencyGroups[need.frequency].push(need.plantName);
    });

    return {
        totalLitersPerWeek: Math.round(totalWeekly * 10) / 10,
        plantCount: placedPlants.length,
        perPlant: plantNeeds,
        frequencyGroups,
        wateringSummary: generateWateringSummary(frequencyGroups)
    };
}

/**
 * Generate a friendly watering summary
 */
function generateWateringSummary(groups) {
    const lines = [];

    for (const [freq, plants] of Object.entries(groups)) {
        if (plants.length === 1) {
            lines.push(`${plants[0]}: ${freq.toLowerCase()}`);
        } else if (plants.length <= 3) {
            lines.push(`${plants.join(', ')}: ${freq.toLowerCase()}`);
        } else {
            lines.push(`${plants.slice(0, 2).join(', ')} + ${plants.length - 2} more: ${freq.toLowerCase()}`);
        }
    }

    return lines;
}

/**
 * Get weather-based watering adjustment recommendation
 */
export function getWeatherAdvice(weather) {
    return getWeatherAdviceI18n(weather);
}
