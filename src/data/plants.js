/**
 * PXD Garden — Expanded Plant Database
 * Comprehensive collection with seasonal tips and water calculation data
 */
import { extraVegetables, extraHerbs, extraFlowers, extraFruits } from './plantsExtra.js';
import { extraVegetables2, extraHerbs2, extraFlowers2, extraFruits2 } from './plantsExtra2.js';
import { extraVegetables3, extraHerbs3, extraFlowers3, extraFruits3 } from './plantsExtra3.js';
import { extraVegetables4, extraHerbs4 } from './plantsExtra4.js';
import { extraFlowers5, extraFruits5 } from './plantsExtra5.js';
import { extraVegetables6, extraHerbs6 } from './plantsExtra6.js';
import { extraFlowers7, extraFruits7 } from './plantsExtra7.js';
import { extraVegetables8, extraHerbs8 } from './plantsExtra8.js';
import { extraFlowers9, extraFruits9 } from './plantsExtra9.js';

// Base water needs (liters per week per plant)
const WATER_LEVELS = {
    veryLow: 0.5,
    low: 1,
    moderate: 2,
    high: 3,
    veryHigh: 4
};

export const plants = [
    // ============ VEGETABLES ============
    {
        id: 'tomato',
        name: 'Tomato',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'deep',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'high',
        baseWaterLiters: WATER_LEVELS.high,
        seasons: ['spring', 'summer'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 70,
        description: 'Classic garden staple, loves warmth and sun',
        seasonalTips: {
            spring: 'Start indoors 6-8 weeks before last frost. Harden off gradually before transplanting.',
            summer: 'Mulch heavily to retain moisture. Prune suckers for larger fruit. Water deeply at base.',
            autumn: 'Harvest green tomatoes before frost and ripen indoors. Remove spent plants.',
            winter: 'Save seeds from best fruits. Plan varieties for next year. Order seeds early.'
        }
    },
    {
        id: 'pepper',
        name: 'Pepper',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer'],
        spacing: { min: 40, ideal: 50, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 65,
        description: 'Sweet or hot, peppers love heat',
        seasonalTips: {
            spring: 'Start indoors 8-10 weeks early. Peppers need warm soil (65°F+) to thrive.',
            summer: 'Side-dress with compost when fruiting. Pick regularly to encourage more peppers.',
            autumn: 'Bring potted peppers indoors before frost. Dry excess peppers for storage.',
            winter: 'Overwinter potted peppers in bright window. Prune back to 6 inches.'
        }
    },
    {
        id: 'carrot',
        name: 'Carrot',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'deep',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 5, ideal: 8, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 70,
        description: 'Root vegetable that prefers cool weather',
        seasonalTips: {
            spring: 'Sow directly outdoors 2-4 weeks before last frost. Keep soil consistently moist.',
            summer: 'Mulch to keep roots cool. Thin seedlings to prevent forked roots.',
            autumn: 'Fall carrots are sweetest after light frost. Can leave in ground with mulch.',
            winter: 'Carrots store well in sand in cool location. Plan succession planting for next year.'
        }
    },
    {
        id: 'lettuce',
        name: 'Lettuce',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'partial',
        waterNeeds: 'high',
        baseWaterLiters: WATER_LEVELS.high,
        seasons: ['spring', 'autumn', 'winter'],
        spacing: { min: 15, ideal: 25, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 45,
        description: 'Fast-growing salad green',
        seasonalTips: {
            spring: 'Sow every 2 weeks for continuous harvest. Use shade cloth as temps rise.',
            summer: 'Grow bolt-resistant varieties in partial shade. Harvest early morning.',
            autumn: 'Best growing season! Cold frames extend harvest well into winter.',
            winter: 'Grow indoors under lights or in cold frames. Protect from hard freezes.'
        }
    },
    {
        id: 'cucumber',
        name: 'Cucumber',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'large',
        sunlight: 'full',
        waterNeeds: 'veryHigh',
        baseWaterLiters: WATER_LEVELS.veryHigh,
        seasons: ['summer'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 55,
        description: 'Crisp and refreshing, needs regular water',
        seasonalTips: {
            spring: 'Start indoors 3 weeks before transplanting. Wait until soil is warm.',
            summer: 'Water deeply. Use trellis for straighter fruit. Pick often to encourage more.',
            autumn: 'Remove plants after production slows. Compost healthy vines.',
            winter: 'Plan varieties for next year. Consider pickling vs slicing types.'
        }
    },
    {
        id: 'zucchini',
        name: 'Zucchini',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'large',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['summer'],
        spacing: { min: 60, ideal: 90, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 50,
        description: 'Prolific summer squash',
        seasonalTips: {
            spring: 'Direct sow after last frost. Prepare rich soil with compost.',
            summer: 'Harvest when 6-8 inches for best flavor. Check daily! Hand-pollinate if needed.',
            autumn: 'Let one fruit mature for seeds. Remove spent plants to prevent disease.',
            winter: 'Shred and freeze excess for baking. Plan different varieties to try.'
        }
    },
    {
        id: 'bean',
        name: 'Green Bean',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'shallow',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['summer'],
        spacing: { min: 10, ideal: 15, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 55,
        description: 'Nitrogen-fixing legume',
        seasonalTips: {
            spring: 'Wait until soil is 60°F+. Inoculate seeds with rhizobium for better nitrogen fixing.',
            summer: 'Pick regularly every 2-3 days. Mulch to keep soil cool and moist.',
            autumn: 'Let pods dry on vine for dried beans. Cut plants at soil level to leave roots.',
            winter: 'Dry beans store well in jars. Save seeds from best producers.'
        }
    },
    {
        id: 'pea',
        name: 'Pea',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 5, ideal: 8, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'Cool weather legume, fixes nitrogen',
        seasonalTips: {
            spring: 'Plant as soon as soil can be worked. Inoculate for better yields.',
            summer: 'Mulch heavily. Remove plants once production stops; they tolerate light shade.',
            autumn: 'Fall peas are sweeter! Plant 8-10 weeks before first frost.',
            winter: 'Cover with straw for early spring growth. Plan varieties for next year.'
        }
    },
    {
        id: 'onion',
        name: 'Onion',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'autumn'],
        spacing: { min: 10, ideal: 15, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 100,
        description: 'Storage-worthy allium',
        seasonalTips: {
            spring: 'Plant sets or transplants after last frost. Choose day-length appropriate varieties.',
            summer: 'Stop watering when tops fall over. Cure in dry, airy spot for 2 weeks.',
            autumn: 'Plant overwintering onions now. Mulch after ground freezes.',
            winter: 'Store cured onions in mesh bags in cool, dark place. Check for rot monthly.'
        }
    },
    {
        id: 'garlic',
        name: 'Garlic',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['autumn', 'winter'],
        spacing: { min: 10, ideal: 15, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 240,
        description: 'Plant in fall for summer harvest',
        seasonalTips: {
            spring: 'Remove mulch. Cut scapes to encourage bulb growth. Side-dress with nitrogen.',
            summer: 'Harvest when bottom leaves brown. Cure for 2-4 weeks in shade.',
            autumn: 'Best planting time! Plant 4-6 weeks before ground freezes. Mulch heavily.',
            winter: 'Garlic is dormant but growing roots. Keep mulch in place for insulation.'
        }
    },
    {
        id: 'potato',
        name: 'Potato',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'deep',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring'],
        spacing: { min: 30, ideal: 40, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 90,
        description: 'Starchy tuber, easy to grow',
        seasonalTips: {
            spring: 'Plant seed potatoes 2-4 weeks before last frost. Hill as plants grow.',
            summer: 'Stop watering when flowers fade. Hill soil to prevent green tubers.',
            autumn: 'Harvest after vines die back. Cure in dark for 2 weeks before storing.',
            winter: 'Store in cool (40°F), dark, humid place. Chit potatoes before spring planting.'
        }
    },
    {
        id: 'spinach',
        name: 'Spinach',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'partial',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn', 'winter'],
        spacing: { min: 10, ideal: 15, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 40,
        description: 'Nutrient-dense cool weather green',
        seasonalTips: {
            spring: 'Sow as soon as soil can be worked. Succession plant every 2 weeks.',
            summer: 'Too hot for spinach. Grow New Zealand spinach or malabar spinach instead.',
            autumn: 'Best season! Cold-hardy varieties can overwinter with protection.',
            winter: 'Grow under row cover or in cold frame. Harvest outer leaves as needed.'
        }
    },
    {
        id: 'kale',
        name: 'Kale',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn', 'winter'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 55,
        description: 'Hardy green that sweetens after frost',
        seasonalTips: {
            spring: 'Start indoors or direct sow. Transplant after last frost for early harvest.',
            summer: 'Provide afternoon shade in hot areas. Watch for cabbage worms.',
            autumn: 'Flavor improves after frost! Harvest outer leaves for continued production.',
            winter: 'One of hardiest greens. Harvest all winter in many climates.'
        }
    },
    {
        id: 'broccoli',
        name: 'Broccoli',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 80,
        description: 'Cool weather brassica',
        seasonalTips: {
            spring: 'Start indoors 6-8 weeks early. Transplant when 4-6 true leaves appear.',
            summer: 'Harvest before flowers open. Side shoots give secondary harvest.',
            autumn: 'Fall broccoli is sweeter. Time transplants for cool weather maturity.',
            winter: 'Protect with row covers in mild climates. Plan spring planting.'
        }
    },
    {
        id: 'cabbage',
        name: 'Cabbage',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 70,
        description: 'Forms tight heads in cool weather',
        seasonalTips: {
            spring: 'Start indoors 6-8 weeks before last frost. Harden off gradually.',
            summer: 'Mulch heavily. Harvest before heads split from heat stress.',
            autumn: 'Best season for storage varieties. Light frost sweetens flavor.',
            winter: 'Store whole heads in root cellar. Ferment into sauerkraut for preservation.'
        }
    },
    {
        id: 'radish',
        name: 'Radish',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 3, ideal: 5, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 25,
        description: 'Quick-growing root, great for beginners',
        seasonalTips: {
            spring: 'Sow as soon as soil can be worked. Great for interplanting.',
            summer: 'Too hot for most radishes. Try daikon or radish sprouts instead.',
            autumn: 'Fall radishes are milder. Winter storage radishes grow well now.',
            winter: 'Grow daikon indoors or in cold frame. Plan succession for spring.'
        }
    },
    {
        id: 'corn',
        name: 'Corn',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'deep',
        canopySize: 'large',
        sunlight: 'full',
        waterNeeds: 'high',
        baseWaterLiters: WATER_LEVELS.high,
        seasons: ['summer'],
        spacing: { min: 25, ideal: 35, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 70,
        description: 'Plant in blocks for pollination',
        seasonalTips: {
            spring: 'Wait until soil is 60°F+. Plant in blocks of 4x4 for pollination.',
            summer: 'Water deeply during silking. Side-dress with nitrogen when knee-high.',
            autumn: 'Harvest when silks brown and kernels milky. Dry for storage or popcorn.',
            winter: 'Save heirloom corn seeds. Plan Three Sisters (corn, beans, squash) for next year.'
        }
    },
    {
        id: 'eggplant',
        name: 'Eggplant',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['summer'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 75,
        description: 'Heat-loving nightshade',
        seasonalTips: {
            spring: 'Start indoors 8-10 weeks early. Loves heat - wait until nights are warm.',
            summer: 'Harvest when skin is glossy. Overripe fruit has bitter seeds.',
            autumn: 'Bring containers inside before frost. Dry or freeze excess harvest.',
            winter: 'Save seeds from best fruits. Try grafted plants for disease resistance.'
        }
    },
    {
        id: 'sweetpotato',
        name: 'Sweet Potato',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'deep',
        canopySize: 'large',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['summer'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 100,
        description: 'Tropical tuber, loves heat',
        seasonalTips: {
            spring: 'Start slips 6-8 weeks before last frost. Need warm soil (65°F+).',
            summer: 'Reduce watering as harvest approaches. Vines can spread 6+ feet.',
            autumn: 'Harvest before frost. Cure at 85°F for 10 days for sweetness.',
            winter: 'Store at 55-60°F. Start new slips from stored roots in late winter.'
        }
    },
    {
        id: 'beet',
        name: 'Beet',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 8, ideal: 10, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 55,
        description: 'Dual-purpose: roots and greens',
        seasonalTips: {
            spring: 'Soak seeds overnight before planting. Thin to one plant per cluster.',
            summer: 'Mulch to keep roots cool. Harvest young for best tenderness.',
            autumn: 'Fall beets are sweetest. Can store in ground with heavy mulch.',
            winter: 'Store in sand in cool location. Roast and freeze for convenience.'
        }
    },
    {
        id: 'celery',
        name: 'Celery',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'partial',
        waterNeeds: 'veryHigh',
        baseWaterLiters: WATER_LEVELS.veryHigh,
        seasons: ['spring', 'autumn'],
        spacing: { min: 20, ideal: 25, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 130,
        description: 'Challenging but rewarding',
        seasonalTips: {
            spring: 'Start indoors 10-12 weeks early. Needs consistent moisture.',
            summer: 'Blanch stalks by wrapping or hilling soil. Never let soil dry out.',
            autumn: 'Harvest before hard freeze. Can dig and replant in cellar for winter.',
            winter: 'Grow cutting celery indoors for leaves. Plan for longer growing season.'
        }
    },
    {
        id: 'chard',
        name: 'Swiss Chard',
        icon: '🌿',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'partial',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 20, ideal: 30, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 50,
        description: 'Colorful, heat-tolerant green',
        seasonalTips: {
            spring: 'Direct sow after last frost. Thin to strongest plants.',
            summer: 'One of few greens that tolerates heat. Harvest outer leaves regularly.',
            autumn: 'Can tolerate light frost. Cover for extended harvest.',
            winter: 'May survive mild winters with protection. Beautiful in arrangements.'
        }
    },
    {
        id: 'asparagus',
        name: 'Asparagus',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'deep',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 730,
        description: 'Perennial, produces for 20+ years',
        seasonalTips: {
            spring: 'Harvest spears when 6-8" tall for 6-8 weeks. Stop when pencil-thin.',
            summer: 'Let ferns grow to feed roots. Do not cut! Add mulch and compost.',
            autumn: 'Cut back brown ferns after frost. Top-dress with compost.',
            winter: 'Cover with 4-6" mulch. Dormant roots are building next year\'s harvest.'
        }
    },
    {
        id: 'brusselssprouts',
        name: 'Brussels Sprouts',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['autumn', 'winter'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 100,
        description: 'Frost sweetens the flavor',
        seasonalTips: {
            spring: 'Start indoors for fall harvest. Transplant when danger of extreme heat passes.',
            summer: 'Keep well-watered. Remove lower yellowing leaves.',
            autumn: 'Harvest from bottom up after first frost. Top plant to speed maturity.',
            winter: 'Can harvest through winter in mild climates. Flavor best after frost.'
        }
    },
    {
        id: 'cauliflower',
        name: 'Cauliflower',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'high',
        baseWaterLiters: WATER_LEVELS.high,
        seasons: ['spring', 'autumn'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 75,
        description: 'Finicky but worth it',
        seasonalTips: {
            spring: 'Start indoors 6-8 weeks early. Very sensitive to temperature stress.',
            summer: 'Blanch white varieties by tying leaves over head. Keep consistently moist.',
            autumn: 'Fall cauliflower is more reliable. Cover before hard freeze.',
            winter: 'Store heads wrapped in plastic in fridge for 2-3 weeks.'
        }
    },
    {
        id: 'leek',
        name: 'Leek',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn', 'winter'],
        spacing: { min: 10, ideal: 15, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 120,
        description: 'Mild onion flavor, cold-hardy',
        seasonalTips: {
            spring: 'Start indoors 10-12 weeks early. Transplant deeply.',
            summer: 'Hill soil around stalks for longer white portions.',
            autumn: 'Harvest as needed. Very cold-hardy, flavor improves with cold.',
            winter: 'Can overwinter in ground in many climates. Harvest until ground freezes.'
        }
    },
    {
        id: 'turnip',
        name: 'Turnip',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'medium',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 8, ideal: 10, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 45,
        description: 'Fast-growing, eat roots and greens',
        seasonalTips: {
            spring: 'Sow early, cool weather crop. Harvest when 2-3" diameter.',
            summer: 'Too hot for turnips. Greens become bitter and bolt.',
            autumn: 'Best season! Fall turnips are sweeter. Frost improves flavor.',
            winter: 'Store in root cellar. Greens are nutritious winter fare.'
        }
    },
    {
        id: 'parsnip',
        name: 'Parsnip',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'deep',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn', 'winter'],
        spacing: { min: 8, ideal: 10, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 120,
        description: 'Sweetens after frost',
        seasonalTips: {
            spring: 'Use fresh seed only! Sow as early as soil can be worked.',
            summer: 'Keep soil consistently moist. Thin to prevent crowding.',
            autumn: 'Leave in ground until after several hard frosts for sweetest flavor.',
            winter: 'Can harvest all winter if ground doesn\'t freeze solid. Mulch heavily.'
        }
    },

    // ============ HERBS ============
    {
        id: 'basil',
        name: 'Basil',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['summer'],
        spacing: { min: 20, ideal: 30, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 30,
        description: 'Aromatic culinary herb, tomato\'s best friend',
        seasonalTips: {
            spring: 'Start indoors after last frost date. Very frost-sensitive.',
            summer: 'Pinch flower buds to extend harvest. Cut above leaf nodes.',
            autumn: 'Make pesto before frost. Bring potted basil indoors.',
            winter: 'Grow under lights indoors. Reduce watering in low light.'
        }
    },
    {
        id: 'parsley',
        name: 'Parsley',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'medium',
        canopySize: 'small',
        sunlight: 'partial',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 15, ideal: 25, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 75,
        description: 'Versatile herb, attracts beneficial insects',
        seasonalTips: {
            spring: 'Soak seeds overnight. Germination is slow (2-3 weeks).',
            summer: 'Harvest outer stems first. Tolerates heat better than cilantro.',
            autumn: 'Cold-hardy! Will survive light frosts. Cover for extended harvest.',
            winter: 'Can grow indoors in sunny window. Good container herb.'
        }
    },
    {
        id: 'cilantro',
        name: 'Cilantro',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'partial',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 10, ideal: 15, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 50,
        description: 'Fast-growing, bolts in heat',
        seasonalTips: {
            spring: 'Sow as soon as soil can be worked. Succession plant every 2 weeks.',
            summer: 'Bolts quickly - harvest seeds (coriander) instead. Provide shade.',
            autumn: 'Best season! Cool weather perfect. Fall plantings overwinter in mild climates.',
            winter: 'Can grow indoors. Keep cool (60-70°F) to prevent bolting.'
        }
    },
    {
        id: 'mint',
        name: 'Mint',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'partial',
        waterNeeds: 'high',
        baseWaterLiters: WATER_LEVELS.high,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 20,
        description: 'Vigorous spreader, MUST contain!',
        seasonalTips: {
            spring: 'Plant in containers to control spread! Divide clumps if overgrown.',
            summer: 'Keep well-watered. Harvest regularly to encourage bushy growth.',
            autumn: 'Cut back before frost. Roots are winter-hardy.',
            winter: 'Grow indoors in bright window. Needs more humidity than most herbs.'
        }
    },
    {
        id: 'rosemary',
        name: 'Rosemary',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'deep',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer', 'autumn', 'winter'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 90,
        description: 'Woody perennial, drought-tolerant',
        seasonalTips: {
            spring: 'Prune after flowering. Take cuttings to propagate.',
            summer: 'Thrives on neglect! Do NOT overwater. Good drainage essential.',
            autumn: 'Bring potted rosemary indoors before frost (zones 7 and colder).',
            winter: 'Keep indoor plants cool and bright. Mist to increase humidity.'
        }
    },
    {
        id: 'thyme',
        name: 'Thyme',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 20, ideal: 30, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 70,
        description: 'Low-growing herb, excellent ground cover',
        seasonalTips: {
            spring: 'Divide established plants. Good for edging and between pavers.',
            summer: 'Let flower for bees! Can harvest even when flowering.',
            autumn: 'Very cold-hardy. Mulch lightly in coldest zones.',
            winter: 'Evergreen in many climates. Harvest stems as needed.'
        }
    },
    {
        id: 'oregano',
        name: 'Oregano',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 25, ideal: 35, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 80,
        description: 'Mediterranean herb, spreads easily',
        seasonalTips: {
            spring: 'Divide clumps. Cut back winter-damaged growth.',
            summer: 'Harvest just before flowering for strongest flavor.',
            autumn: 'Dry for winter use. Very cold-hardy perennial.',
            winter: 'Evergreen in mild climates. Flavor strongest when dried.'
        }
    },
    {
        id: 'chives',
        name: 'Chives',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 15, ideal: 20, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'Mild onion flavor, pretty purple flowers',
        seasonalTips: {
            spring: 'Divide clumps every 3-4 years. First herb to appear!',
            summer: 'Let some flowers for pollinators. Edible flower garnish.',
            autumn: 'Cut back before frost. Dig and pot for indoor use.',
            winter: 'Easy to grow indoors. One of first to regrow in spring.'
        }
    },
    {
        id: 'dill',
        name: 'Dill',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer'],
        spacing: { min: 20, ideal: 30, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 40,
        description: 'Attracts beneficial insects',
        seasonalTips: {
            spring: 'Direct sow after last frost. Does not transplant well.',
            summer: 'Let flowers mature for pickle spice. Attracts swallowtail butterflies.',
            autumn: 'Collect seeds for next year. Self-sows readily.',
            winter: 'Dry seeds for cooking. Plan succession planting for next year.'
        }
    },
    {
        id: 'sage',
        name: 'Sage',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 75,
        description: 'Savory herb with fuzzy leaves',
        seasonalTips: {
            spring: 'Prune woody growth. Take cuttings to propagate.',
            summer: 'Harvest before flowering for best flavor. Good drainage essential.',
            autumn: 'Dry leaves for winter cooking. Hardy to zone 5.',
            winter: 'Evergreen in mild winters. Harvest sparingly.'
        }
    },
    {
        id: 'lavender',
        name: 'Lavender',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 90,
        description: 'Fragrant flowers attract pollinators',
        seasonalTips: {
            spring: 'Prune 1/3 after last frost. Avoid cutting into old wood.',
            summer: 'Harvest when 1/3 flowers open. Hang to dry in bundles.',
            autumn: 'Add gravel mulch for drainage. Avoid wet feet!',
            winter: 'Mulch in coldest zones. English lavender hardiest variety.'
        }
    },
    {
        id: 'fennel',
        name: 'Fennel',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'deep',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 25, ideal: 35, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 65,
        description: 'Licorice-flavored, all parts edible',
        seasonalTips: {
            spring: 'Direct sow after frost danger. Isolate from dill to prevent crossing.',
            summer: 'Hill soil around bulb for blanching (Florence fennel).',
            autumn: 'Harvest bulbs before hard frost. Seeds for tea and seasoning.',
            winter: 'Dry seeds store well. Bronze fennel is ornamental.'
        }
    },
    {
        id: 'tarragon',
        name: 'Tarragon',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'medium',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'French variety has best flavor',
        seasonalTips: {
            spring: 'French tarragon must be propagated by division (no viable seeds).',
            summer: 'Harvest before flowering. Best fresh but freezes well.',
            autumn: 'Cut back after frost. Mulch in cold zones.',
            winter: 'Dormant. Prepare bed for spring division.'
        }
    },
    {
        id: 'lemonbalm',
        name: 'Lemon Balm',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'shallow',
        canopySize: 'medium',
        sunlight: 'partial',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 55,
        description: 'Lemon-scented mint relative',
        seasonalTips: {
            spring: 'Divide clumps. Spreads vigorously - contain if needed!',
            summer: 'Cut back halfway to prevent seeding. Makes lovely tea.',
            autumn: 'Harvest leaves before frost for drying.',
            winter: 'Dies back but very hardy. Will return from roots.'
        }
    },
    {
        id: 'chamomile',
        name: 'Chamomile',
        icon: '🌿',
        category: 'herb',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer'],
        spacing: { min: 15, ideal: 20, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'Calming tea, helps nearby plants',
        seasonalTips: {
            spring: 'Direct sow - needs light to germinate. Self-sows readily.',
            summer: 'Harvest flowers when fully open. Pick every 2-3 days.',
            autumn: 'Let some flowers go to seed for next year.',
            winter: 'Dry flowers for tea. Roman chamomile is perennial.'
        }
    },

    // ============ FLOWERS ============
    {
        id: 'marigold',
        name: 'Marigold',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 20, ideal: 30, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 50,
        description: 'Pest-repelling companion plant',
        seasonalTips: {
            spring: 'Start indoors 6 weeks early or direct sow after frost.',
            summer: 'Deadhead for continuous blooms. French marigolds repel nematodes.',
            autumn: 'Let some flowers go to seed. Remove plants before frost.',
            winter: 'Save seeds from best plants. Plan varieties for next year.'
        }
    },
    {
        id: 'nasturtium',
        name: 'Nasturtium',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer'],
        spacing: { min: 25, ideal: 35, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 55,
        description: 'Edible flowers, trap crop for aphids',
        seasonalTips: {
            spring: 'Direct sow after frost - resents transplanting. Nick seeds for faster germination.',
            summer: 'Thrives on poor soil! Rich soil = more leaves, fewer flowers.',
            autumn: 'Collect seeds before frost. Pickle unripe seeds as "poor man\'s capers."',
            winter: 'Save seeds in cool, dry place. Plan placement as trap crop.'
        }
    },
    {
        id: 'sunflower',
        name: 'Sunflower',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'deep',
        canopySize: 'large',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['summer'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 70,
        description: 'Attracts pollinators, provides shade',
        seasonalTips: {
            spring: 'Direct sow after last frost. Succession plant for extended bloom.',
            summer: 'Water deeply. Stake tall varieties. Great for kids!',
            autumn: 'Let heads mature for seeds. Cover with netting to protect from birds.',
            winter: 'Leave stalks for wildlife shelter. Save seeds for sowing or eating.'
        }
    },
    {
        id: 'zinnia',
        name: 'Zinnia',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['summer'],
        spacing: { min: 15, ideal: 25, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'Butterfly magnet, cut flower favorite',
        seasonalTips: {
            spring: 'Direct sow after frost. Loves heat! Start indoors sparingly.',
            summer: 'Cut often for more blooms. Water at base to prevent mildew.',
            autumn: 'Let some flowers go to seed. Frost ends the show.',
            winter: 'Save seeds from favorites. So many colors to try!'
        }
    },
    {
        id: 'borage',
        name: 'Borage',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 55,
        description: 'Bee favorite, edible blue flowers',
        seasonalTips: {
            spring: 'Direct sow after frost. Self-sows abundantly - give it space!',
            summer: 'Bees love it! Use flowers in drinks and salads.',
            autumn: 'Let some plants go to seed. Pull excess before seeding.',
            winter: 'Seeds stay viable in soil. Will appear on its own next year!'
        }
    },
    {
        id: 'calendula',
        name: 'Calendula',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'autumn'],
        spacing: { min: 20, ideal: 30, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 45,
        description: 'Medicinal flower, pest deterrent',
        seasonalTips: {
            spring: 'Direct sow as soon as soil can be worked. Cool weather favorite.',
            summer: 'Heat makes it rest. Deadhead or let self-sow.',
            autumn: 'Second flush of blooms! Harvest petals for salves.',
            winter: 'Dry petals for tea and skin care. Self-sows for next year.'
        }
    },
    {
        id: 'cosmos',
        name: 'Cosmos',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['summer', 'autumn'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'Airy blooms attract butterflies',
        seasonalTips: {
            spring: 'Direct sow after frost. Poor soil = more flowers. Avoid fertilizer.',
            summer: 'Deadhead for continuous bloom. Pinch young plants for bushiness.',
            autumn: 'Blooms until frost. Let some go to seed.',
            winter: 'Save seeds. Self-sows in many climates.'
        }
    },
    {
        id: 'sweetpeas',
        name: 'Sweet Peas',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring'],
        spacing: { min: 10, ideal: 15, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 65,
        description: 'Fragrant climbers, old-fashioned charm',
        seasonalTips: {
            spring: 'Sow fall or very early spring. Nick seeds or soak overnight.',
            summer: 'Keep picked! Fades in heat. Provide afternoon shade.',
            autumn: 'Fall sowing works in mild climates for early spring bloom.',
            winter: 'Cold-stratify seeds if fall sowing not possible.'
        }
    },
    {
        id: 'dahlia',
        name: 'Dahlia',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['summer', 'autumn'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 90,
        description: 'Stunning cut flowers, endless varieties',
        seasonalTips: {
            spring: 'Plant tubers after last frost. Start indoors for earlier blooms.',
            summer: 'Pinch center when 12" tall for more stems. Stake dinnerplate types.',
            autumn: 'Peak season! Cut when 3/4 open. Dig tubers after frost.',
            winter: 'Store tubers in peat in cool dark place. Divide in spring.'
        }
    },
    {
        id: 'echinacea',
        name: 'Echinacea',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'deep',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['summer', 'autumn'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 365,
        description: 'Native perennial, medicinal',
        seasonalTips: {
            spring: 'Divide established clumps. New plants from seed take 2 years to bloom.',
            summer: 'Drought-tolerant once established. Bees and butterflies love it.',
            autumn: 'Leave seed heads for birds. Collect roots for medicine after 3 years.',
            winter: 'Leave standing for winter interest. Low maintenance perennial.'
        }
    },
    {
        id: 'alyssum',
        name: 'Sweet Alyssum',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 15, ideal: 20, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 45,
        description: 'Fragrant ground cover, beneficial insects',
        seasonalTips: {
            spring: 'Direct sow early. Perfect for edges and containers.',
            summer: 'Shear back if floppy. Excellent living mulch.',
            autumn: 'Self-sows readily. Let some go to seed.',
            winter: 'Annual but may reseed. Plan placement for beneficial insect support.'
        }
    },
    {
        id: 'petunia',
        name: 'Petunia',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 20, ideal: 30, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'Classic bedding plant, many colors',
        seasonalTips: {
            spring: 'Start indoors 10 weeks early. Buy transplants for faster color.',
            summer: 'Deadhead spent blooms. Cut back leggy plants by half.',
            autumn: 'Blooms until frost. Take cuttings to overwinter special varieties.',
            winter: 'Annual in most climates. Plan container combinations.'
        }
    },

    // ============ ADDITIONAL VEGETABLES ============
    {
        id: 'pumpkin',
        name: 'Pumpkin',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'deep',
        canopySize: 'large',
        sunlight: 'full',
        waterNeeds: 'high',
        baseWaterLiters: WATER_LEVELS.high,
        seasons: ['summer', 'autumn'],
        spacing: { min: 90, ideal: 120, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 100,
        description: 'Fall favorite, needs lots of space',
        seasonalTips: {
            spring: 'Start indoors 3-4 weeks before last frost. Use peat pots to avoid root disturbance.',
            summer: 'Water deeply, especially during fruit development. Mulch heavily.',
            autumn: 'Harvest when rind is hard and stem begins to dry. Cure in sun for a week.',
            winter: 'Store in cool, dry place. Save seeds from best pumpkins for next year.'
        }
    },
    {
        id: 'okra',
        name: 'Okra',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'deep',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['summer'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 55,
        description: 'Heat-loving southern favorite',
        seasonalTips: {
            spring: 'Soak seeds overnight. Plant when soil is 65°F+. Loves warmth.',
            summer: 'Pick pods when 3-4 inches long every 2 days. Wear gloves - spines!',
            autumn: 'Let some pods dry on plant for seed saving. Remove plants after frost.',
            winter: 'Freeze or pickle harvest. Plan for warm spot next year.'
        }
    },
    {
        id: 'artichoke',
        name: 'Artichoke',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'deep',
        canopySize: 'large',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer'],
        spacing: { min: 90, ideal: 120, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 150,
        description: 'Large perennial thistle, dramatic plant',
        seasonalTips: {
            spring: 'Plant divisions or transplants after last frost. Needs vernalization.',
            summer: 'Harvest buds before they open. Cut stems to 2-3 inches.',
            autumn: 'Cut back foliage after frost. Mulch crown heavily in cold areas.',
            winter: 'Protect roots with thick mulch. In mild climates, may produce year-round.'
        }
    },
    {
        id: 'arugula',
        name: 'Arugula',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'partial',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 10, ideal: 15, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 30,
        description: 'Peppery salad green, fast-growing',
        seasonalTips: {
            spring: 'Direct sow as early as soil can be worked. Succession sow every 2 weeks.',
            summer: 'Bolts quickly in heat. Grow in shade or wait for fall.',
            autumn: 'Best season for arugula. Mild temps = best flavor.',
            winter: 'Grow under cold frame or indoors. Self-sows readily.'
        }
    },
    {
        id: 'scallion',
        name: 'Green Onion',
        icon: '🥬',
        category: 'vegetable',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 5, ideal: 8, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'Quick-growing allium, harvest as needed',
        seasonalTips: {
            spring: 'Direct sow or plant sets. Can regrow from root ends.',
            summer: 'Keep well-watered. Harvest outer stalks as needed.',
            autumn: 'Fall planting works well. Overwintering varieties available.',
            winter: 'Grow on windowsill from grocery store scraps. Easy indoor crop.'
        }
    },

    // ============ ADDITIONAL FLOWERS ============
    {
        id: 'snapdragon',
        name: 'Snapdragon',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn'],
        spacing: { min: 15, ideal: 25, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 70,
        description: 'Classic cottage garden flower, cool season',
        seasonalTips: {
            spring: 'Start indoors 8-10 weeks early. Loves cool temps.',
            summer: 'Cut back after first flush for fall rebloom. Provide afternoon shade.',
            autumn: 'Second bloom season! Frost-hardy to mid-20s°F.',
            winter: 'May overwinter in mild climates. Excellent cut flower.'
        }
    },
    {
        id: 'pansy',
        name: 'Pansy',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'partial',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'autumn', 'winter'],
        spacing: { min: 15, ideal: 20, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'Cool-weather bedding flower, edible',
        seasonalTips: {
            spring: 'Plant transplants as soon as soil can be worked. Frost-hardy.',
            summer: 'Fades in heat. Pull and replace with warm-season annuals.',
            autumn: 'Best planting time for winter color. Will bloom into cold weather.',
            winter: 'Blooms on warm days. Protect with light mulch in coldest areas.'
        }
    },
    {
        id: 'lily',
        name: 'Lily',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'deep',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['summer'],
        spacing: { min: 20, ideal: 30, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 365,
        description: 'Elegant perennial, fragrant blooms',
        seasonalTips: {
            spring: 'Plant bulbs in spring or fall. Emerging shoots are frost-tender.',
            summer: 'Stake tall varieties. Deadhead but leave foliage to feed bulb.',
            autumn: 'Let foliage yellow naturally. Divide overcrowded clumps.',
            winter: 'Mulch bulbs in cold climates. Order new varieties for spring.'
        }
    },
    {
        id: 'geranium',
        name: 'Geranium',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 25, ideal: 35, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 75,
        description: 'Container favorite, long-blooming',
        seasonalTips: {
            spring: 'Buy transplants or start from cuttings. Wait until frost danger passes.',
            summer: 'Deadhead regularly. Let soil dry slightly between waterings.',
            autumn: 'Take cuttings before frost. Can overwinter indoors.',
            winter: 'Keep in bright window at 55-60°F. Water sparingly.'
        }
    },
    {
        id: 'impatiens',
        name: 'Impatiens',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'shade',
        waterNeeds: 'high',
        baseWaterLiters: WATER_LEVELS.high,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 20, ideal: 30, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'Best shade flower, non-stop blooms',
        seasonalTips: {
            spring: 'Plant after all frost danger. Needs shade and moisture.',
            summer: 'Keep moist! Wilts quickly in dry soil. No deadheading needed.',
            autumn: 'Blooms until first frost. Take cuttings to overwinter.',
            winter: 'Annual in most zones. New Guinea types more sun-tolerant.'
        }
    },
    {
        id: 'morningglory',
        name: 'Morning Glory',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'medium',
        canopySize: 'large',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['summer', 'autumn'],
        spacing: { min: 15, ideal: 25, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 65,
        description: 'Fast-growing vine, hummingbird magnet',
        seasonalTips: {
            spring: 'Nick seeds and soak overnight. Direct sow after last frost.',
            summer: 'Provide trellis or fence. Blooms open in morning, close by afternoon.',
            autumn: 'Let pods dry on vine for seeds. Can become invasive - deadhead if needed.',
            winter: 'Annual. Collect dry seed pods for next year. Self-sows readily.'
        }
    },
    {
        id: 'blackeyedsusan',
        name: 'Black-Eyed Susan',
        icon: '🌸',
        category: 'flower',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['summer', 'autumn'],
        spacing: { min: 30, ideal: 45, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 120,
        description: 'Native perennial, pollinator favorite',
        seasonalTips: {
            spring: 'Divide clumps every 3-4 years. New plants from seed in spring.',
            summer: 'Drought-tolerant once established. Deadhead for longer bloom.',
            autumn: 'Leave seed heads for birds. Beautiful fall color.',
            winter: 'Cut back dead foliage. Very low maintenance perennial.'
        }
    },

    // ============ FRUITS ============
    {
        id: 'strawberry',
        name: 'Strawberry',
        icon: '🍓',
        category: 'fruit',
        rootDepth: 'shallow',
        canopySize: 'small',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer'],
        spacing: { min: 25, ideal: 35, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 60,
        description: 'Popular ground cover berry, easy to grow',
        seasonalTips: {
            spring: 'Plant bare root or transplants. Remove first-year flowers on June-bearers.',
            summer: 'Mulch with straw to keep fruit clean. Net against birds.',
            autumn: 'Let runners root for new plants. Mulch heavily after first freeze.',
            winter: 'Keep straw mulch in place. Remove gradually in spring as growth starts.'
        }
    },
    {
        id: 'blueberry',
        name: 'Blueberry',
        icon: '🍓',
        category: 'fruit',
        rootDepth: 'shallow',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer'],
        spacing: { min: 90, ideal: 120, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 365,
        description: 'Acid-loving bush berry, beautiful fall color',
        seasonalTips: {
            spring: 'Acidify soil (pH 4.5-5.5). Plant 2+ varieties for cross-pollination.',
            summer: 'Net bushes when berries color. Pick when fully blue and sweet.',
            autumn: 'Gorgeous fall foliage. Mulch with pine needles for acidity.',
            winter: 'Prune oldest canes. Apply sulfur if pH is too high.'
        }
    },
    {
        id: 'watermelon',
        name: 'Watermelon',
        icon: '🍓',
        category: 'fruit',
        rootDepth: 'deep',
        canopySize: 'large',
        sunlight: 'full',
        waterNeeds: 'high',
        baseWaterLiters: WATER_LEVELS.high,
        seasons: ['summer'],
        spacing: { min: 90, ideal: 120, unit: 'cm' },
        isHeavyFeeder: true,
        daysToHarvest: 80,
        description: 'Summer staple, needs warm soil and space',
        seasonalTips: {
            spring: 'Start indoors 3-4 weeks early. Needs warm soil (70°F+).',
            summer: 'Water deeply until fruit starts to ripen, then reduce. Thump test for ripeness!',
            autumn: 'Harvest when tendril near stem dries. Enjoy!',
            winter: 'Save seeds from heirloom varieties. Plan garden layout for vines.'
        }
    },
    {
        id: 'grape',
        name: 'Grape',
        icon: '🍓',
        category: 'fruit',
        rootDepth: 'deep',
        canopySize: 'large',
        sunlight: 'full',
        waterNeeds: 'low',
        baseWaterLiters: WATER_LEVELS.low,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 180, ideal: 240, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 365,
        description: 'Climbing vine fruit, great for arbors',
        seasonalTips: {
            spring: 'Prune to 2-3 buds per spur. Train on trellis or arbor.',
            summer: 'Thin clusters for larger fruit. Water deeply but infrequently.',
            autumn: 'Harvest when grapes are sweet and easily detach. Make juice or jam.',
            winter: 'Major pruning in late winter while dormant. Remove 90% of previous growth.'
        }
    },
    {
        id: 'raspberry',
        name: 'Raspberry',
        icon: '🍓',
        category: 'fruit',
        rootDepth: 'medium',
        canopySize: 'medium',
        sunlight: 'full',
        waterNeeds: 'moderate',
        baseWaterLiters: WATER_LEVELS.moderate,
        seasons: ['spring', 'summer', 'autumn'],
        spacing: { min: 45, ideal: 60, unit: 'cm' },
        isHeavyFeeder: false,
        daysToHarvest: 365,
        description: 'Bramble fruit, spreads by suckers',
        seasonalTips: {
            spring: 'Thin canes to 6 per foot. Remove weak or damaged growth.',
            summer: 'Pick berries every 2-3 days when ripe. Mulch to keep roots cool.',
            autumn: 'Fall-bearing types produce now. Cut spent summer canes to ground.',
            winter: 'Tie canes to support. Mulch roots in coldest zones.'
        }
    }
];

// Merge extended plant data
plants.push(...extraVegetables, ...extraHerbs, ...extraFlowers, ...extraFruits);
plants.push(...extraVegetables2, ...extraHerbs2, ...extraFlowers2, ...extraFruits2);
plants.push(...extraVegetables3, ...extraHerbs3, ...extraFlowers3, ...extraFruits3);
plants.push(...extraVegetables4, ...extraHerbs4);
plants.push(...extraFlowers5, ...extraFruits5);
plants.push(...extraVegetables6, ...extraHerbs6);
plants.push(...extraFlowers7, ...extraFruits7);
plants.push(...extraVegetables8, ...extraHerbs8);
plants.push(...extraFlowers9, ...extraFruits9);


/**
 * Get a plant by its ID
 */
export function getPlantById(id) {
    return plants.find(p => p.id === id);
}

/**
 * Get plants by category
 */
export function getPlantsByCategory(category) {
    return plants.filter(p => p.category === category);
}

/**
 * Get plants suitable for a season
 */
export function getPlantsBySeason(season) {
    return plants.filter(p => p.seasons.includes(season));
}

/**
 * Search plants by name
 */
export function searchPlants(query) {
    const q = query.toLowerCase();
    return plants.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
}

/**
 * Get seasonal tip for a specific plant
 */
export function getPlantSeasonalTip(plantId, season) {
    const plant = getPlantById(plantId);
    if (!plant || !plant.seasonalTips) return null;
    return plant.seasonalTips[season] || null;
}
