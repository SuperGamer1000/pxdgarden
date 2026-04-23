/**
 * PXD Garden — Companion Planting Rules
 * Database of plant relationships and pairing reasons
 */

export const RELATIONSHIP = {
    BENEFICIAL: 'beneficial',
    NEUTRAL: 'neutral',
    AVOID: 'avoid'
};

export const REASONS = {
    PEST_REPELLENT: 'pest_repellent',
    NITROGEN_FIXING: 'nitrogen_fixing',
    BENEFICIAL_INSECTS: 'beneficial_insects',
    SHADE_SUPPORT: 'shade_support',
    POLLINATION_BOOST: 'pollination_boost',
    GROUND_COVER: 'ground_cover',
    TRAP_CROP: 'trap_crop',
    FLAVOR_ENHANCEMENT: 'flavor_enhancement',
    GROWTH_SUPPORT: 'growth_support',
    NUTRIENT_SHARING: 'nutrient_sharing',
    DISEASE_REDUCTION: 'disease_reduction',
    ROOT_DEPTH_COMPATIBLE: 'root_depth_compatible',
    NUTRIENT_COMPETITION: 'nutrient_competition',
    DISEASE_SPREAD: 'disease_spread',
    GROWTH_INHIBITION: 'growth_inhibition',
    SPACE_COMPETITION: 'space_competition',
    ALLELOPATHY: 'allelopathy',
    NUTRIENT_ACCUMULATOR: 'nutrient_accumulator'
};

export const REASON_LABELS = {
    [REASONS.PEST_REPELLENT]: 'Repels pests',
    [REASONS.NITROGEN_FIXING]: 'Fixes nitrogen',
    [REASONS.BENEFICIAL_INSECTS]: 'Attracts beneficials',
    [REASONS.SHADE_SUPPORT]: 'Provides shade',
    [REASONS.POLLINATION_BOOST]: 'Boosts pollination',
    [REASONS.GROUND_COVER]: 'Ground cover',
    [REASONS.TRAP_CROP]: 'Trap crop',
    [REASONS.FLAVOR_ENHANCEMENT]: 'Enhances flavor',
    [REASONS.GROWTH_SUPPORT]: 'Supports growth',
    [REASONS.NUTRIENT_SHARING]: 'Shares nutrients',
    [REASONS.DISEASE_REDUCTION]: 'Reduces disease',
    [REASONS.ROOT_DEPTH_COMPATIBLE]: 'Compatible roots',
    [REASONS.NUTRIENT_COMPETITION]: 'Nutrient competition',
    [REASONS.DISEASE_SPREAD]: 'Disease spread risk',
    [REASONS.GROWTH_INHIBITION]: 'Inhibits growth',
    [REASONS.SPACE_COMPETITION]: 'Space competition',
    [REASONS.ALLELOPATHY]: 'Chemical inhibition'
};

export const companionRules = [
    // TOMATO relationships
    {
        plantA: 'tomato', plantB: 'basil', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT, REASONS.FLAVOR_ENHANCEMENT],
        notes: 'Basil repels aphids and improves tomato flavor'
    },
    {
        plantA: 'tomato', plantB: 'carrot', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE],
        notes: 'Different root depths, share space efficiently'
    },
    {
        plantA: 'tomato', plantB: 'parsley', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.BENEFICIAL_INSECTS],
        notes: 'Parsley attracts predatory wasps'
    },
    {
        plantA: 'tomato', plantB: 'marigold', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Marigolds repel nematodes and whiteflies'
    },
    {
        plantA: 'tomato', plantB: 'borage', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT, REASONS.POLLINATION_BOOST],
        notes: 'Borage repels tomato hornworm and attracts pollinators'
    },
    {
        plantA: 'tomato', plantB: 'nasturtium', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.TRAP_CROP],
        notes: 'Nasturtiums lure aphids away from tomatoes'
    },
    {
        plantA: 'tomato', plantB: 'potato', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.DISEASE_SPREAD],
        notes: 'Both are nightshades, share diseases like blight'
    },
    {
        plantA: 'tomato', plantB: 'cabbage', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.GROWTH_INHIBITION],
        notes: 'Brassicas can stunt tomato growth'
    },
    {
        plantA: 'tomato', plantB: 'corn', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.NUTRIENT_COMPETITION],
        notes: 'Both are heavy feeders, compete for nutrients'
    },

    // PEPPER relationships
    {
        plantA: 'pepper', plantB: 'basil', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT, REASONS.FLAVOR_ENHANCEMENT],
        notes: 'Basil repels aphids and improves pepper health'
    },
    {
        plantA: 'pepper', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.NUTRIENT_SHARING],
        notes: 'Similar needs, grow well together'
    },
    {
        plantA: 'pepper', plantB: 'carrot', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE],
        notes: 'Different root depths allow efficient spacing'
    },
    {
        plantA: 'pepper', plantB: 'onion', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Onions deter many pepper pests'
    },

    // CARROT relationships
    {
        plantA: 'carrot', plantB: 'onion', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Carrots repel onion flies, onions repel carrot flies'
    },
    {
        plantA: 'carrot', plantB: 'lettuce', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE, REASONS.SHADE_SUPPORT],
        notes: 'Lettuce provides ground cover, different harvest times'
    },
    {
        plantA: 'carrot', plantB: 'chives', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Chives repel carrot rust fly'
    },
    {
        plantA: 'carrot', plantB: 'rosemary', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Rosemary deters carrot fly'
    },
    {
        plantA: 'carrot', plantB: 'dill', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.GROWTH_INHIBITION],
        notes: 'Dill stunts carrot growth when mature'
    },

    // BEAN relationships
    {
        plantA: 'bean', plantB: 'corn', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.NITROGEN_FIXING, REASONS.GROWTH_SUPPORT],
        notes: 'Beans fix nitrogen corn needs, corn supports climbing beans'
    },
    {
        plantA: 'bean', plantB: 'zucchini', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.NITROGEN_FIXING, REASONS.GROUND_COVER],
        notes: 'Classic Three Sisters planting'
    },
    {
        plantA: 'bean', plantB: 'carrot', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.NITROGEN_FIXING],
        notes: 'Beans add nitrogen carrots use'
    },
    {
        plantA: 'bean', plantB: 'cucumber', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.NITROGEN_FIXING],
        notes: 'Beans enrich soil for cucumber'
    },
    {
        plantA: 'bean', plantB: 'onion', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.GROWTH_INHIBITION],
        notes: 'Onion family inhibits bean growth'
    },
    {
        plantA: 'bean', plantB: 'garlic', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.GROWTH_INHIBITION],
        notes: 'Garlic inhibits bean growth'
    },

    // CUCUMBER relationships
    {
        plantA: 'cucumber', plantB: 'bean', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.NITROGEN_FIXING],
        notes: 'Beans provide nitrogen cucumbers love'
    },
    {
        plantA: 'cucumber', plantB: 'corn', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.SHADE_SUPPORT],
        notes: 'Corn provides afternoon shade'
    },
    {
        plantA: 'cucumber', plantB: 'sunflower', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.POLLINATION_BOOST, REASONS.SHADE_SUPPORT],
        notes: 'Sunflowers attract pollinators and provide shade'
    },
    {
        plantA: 'cucumber', plantB: 'dill', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.BENEFICIAL_INSECTS],
        notes: 'Dill attracts beneficial insects (harvest before it matures)'
    },
    {
        plantA: 'cucumber', plantB: 'potato', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.NUTRIENT_COMPETITION],
        notes: 'Both are heavy feeders'
    },
    {
        plantA: 'cucumber', plantB: 'sage', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.GROWTH_INHIBITION],
        notes: 'Sage can stunt cucumber growth'
    },

    // LETTUCE relationships
    {
        plantA: 'lettuce', plantB: 'carrot', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE],
        notes: 'Shallow and deep roots share soil'
    },
    {
        plantA: 'lettuce', plantB: 'radish', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE],
        notes: 'Radishes mature before lettuce needs space'
    },
    {
        plantA: 'lettuce', plantB: 'chives', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Chives deter aphids'
    },
    {
        plantA: 'lettuce', plantB: 'spinach', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE],
        notes: 'Similar needs, grow well together'
    },

    // CORN relationships - Three Sisters
    {
        plantA: 'corn', plantB: 'bean', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.NITROGEN_FIXING, REASONS.GROWTH_SUPPORT],
        notes: 'Classic Three Sisters partnership'
    },
    {
        plantA: 'corn', plantB: 'zucchini', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.GROUND_COVER],
        notes: 'Squash shades soil, reduces weeds'
    },
    {
        plantA: 'corn', plantB: 'sunflower', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.POLLINATION_BOOST],
        notes: 'Both attract pollinators'
    },
    {
        plantA: 'corn', plantB: 'tomato', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.NUTRIENT_COMPETITION, REASONS.DISEASE_SPREAD],
        notes: 'Both are heavy feeders, share corn earworm'
    },

    // ONION/GARLIC relationships
    {
        plantA: 'onion', plantB: 'carrot', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Mutual pest protection'
    },
    {
        plantA: 'onion', plantB: 'lettuce', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Onions deter many pests'
    },
    {
        plantA: 'onion', plantB: 'spinach', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Onions protect spinach from pests'
    },
    {
        plantA: 'garlic', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT, REASONS.DISEASE_REDUCTION],
        notes: 'Garlic repels spider mites and deters blight'
    },
    {
        plantA: 'garlic', plantB: 'pepper', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Garlic repels aphids and spider mites'
    },

    // BASIL relationships
    {
        plantA: 'basil', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT, REASONS.FLAVOR_ENHANCEMENT],
        notes: 'Classic garden pairing'
    },
    {
        plantA: 'basil', plantB: 'pepper', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Basil repels aphids and spider mites'
    },
    {
        plantA: 'basil', plantB: 'oregano', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Herbs grow well together'
    },
    {
        plantA: 'basil', plantB: 'sage', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.GROWTH_INHIBITION],
        notes: 'Different water needs cause issues'
    },

    // MARIGOLD relationships - universal companion
    {
        plantA: 'marigold', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Repels nematodes and whiteflies'
    },
    {
        plantA: 'marigold', plantB: 'pepper', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Deters many garden pests'
    },
    {
        plantA: 'marigold', plantB: 'cucumber', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Repels cucumber beetles'
    },
    {
        plantA: 'marigold', plantB: 'zucchini', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Deters squash bugs'
    },
    {
        plantA: 'marigold', plantB: 'cabbage', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Repels cabbage moths'
    },
    {
        plantA: 'marigold', plantB: 'bean', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Deters Mexican bean beetles'
    },

    // NASTURTIUM relationships - trap crop
    {
        plantA: 'nasturtium', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.TRAP_CROP],
        notes: 'Lures aphids away from tomatoes'
    },
    {
        plantA: 'nasturtium', plantB: 'cucumber', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.TRAP_CROP],
        notes: 'Attracts aphids away from cucumbers'
    },
    {
        plantA: 'nasturtium', plantB: 'cabbage', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.TRAP_CROP],
        notes: 'Lures caterpillars away'
    },
    {
        plantA: 'nasturtium', plantB: 'zucchini', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.TRAP_CROP],
        notes: 'Deters squash beetles'
    },

    // BORAGE relationships
    {
        plantA: 'borage', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT, REASONS.POLLINATION_BOOST],
        notes: 'Repels hornworm, attracts bees'
    },
    {
        plantA: 'borage', plantB: 'zucchini', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.POLLINATION_BOOST],
        notes: 'Attracts bees for squash pollination'
    },
    {
        plantA: 'borage', plantB: 'cucumber', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.POLLINATION_BOOST],
        notes: 'Improves cucumber pollination'
    },

    // SUNFLOWER relationships
    {
        plantA: 'sunflower', plantB: 'cucumber', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.SHADE_SUPPORT, REASONS.POLLINATION_BOOST],
        notes: 'Provides shade and attracts pollinators'
    },
    {
        plantA: 'sunflower', plantB: 'corn', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.POLLINATION_BOOST],
        notes: 'Both attract pollinators'
    },
    {
        plantA: 'sunflower', plantB: 'zucchini', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.SHADE_SUPPORT],
        notes: 'Provides beneficial afternoon shade'
    },
    {
        plantA: 'sunflower', plantB: 'potato', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.ALLELOPATHY],
        notes: 'Sunflower roots inhibit potato growth'
    },

    // POTATO relationships
    {
        plantA: 'potato', plantB: 'bean', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.NITROGEN_FIXING],
        notes: 'Beans add nitrogen potatoes need'
    },
    {
        plantA: 'potato', plantB: 'corn', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Different pests, don\'t attract each other\'s'
    },
    {
        plantA: 'potato', plantB: 'tomato', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.DISEASE_SPREAD],
        notes: 'Share late blight disease'
    },
    {
        plantA: 'potato', plantB: 'cucumber', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.NUTRIENT_COMPETITION],
        notes: 'Both are heavy feeders'
    },
    {
        plantA: 'potato', plantB: 'sunflower', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.ALLELOPATHY],
        notes: 'Sunflower chemicals harm potatoes'
    },

    // BRASSICA relationships
    {
        plantA: 'cabbage', plantB: 'dill', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.BENEFICIAL_INSECTS],
        notes: 'Dill attracts predatory wasps'
    },
    {
        plantA: 'cabbage', plantB: 'nasturtium', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.TRAP_CROP],
        notes: 'Nasturtiums lure caterpillars away'
    },
    {
        plantA: 'cabbage', plantB: 'thyme', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Thyme repels cabbage moths'
    },
    {
        plantA: 'broccoli', plantB: 'onion', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Onions deter cabbage worms'
    },
    {
        plantA: 'broccoli', plantB: 'rosemary', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Rosemary deters cabbage moths'
    },
    {
        plantA: 'kale', plantB: 'garlic', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Garlic deters many kale pests'
    },

    // ROSEMARY relationships
    {
        plantA: 'rosemary', plantB: 'carrot', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Rosemary deters carrot fly'
    },
    {
        plantA: 'rosemary', plantB: 'cabbage', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Deters cabbage moths and bean beetles'
    },
    {
        plantA: 'rosemary', plantB: 'sage', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.NUTRIENT_SHARING],
        notes: 'Similar needs, grow well together'
    },

    // LAVENDER relationships
    {
        plantA: 'lavender', plantB: 'rosemary', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Both Mediterranean herbs, similar needs'
    },
    {
        plantA: 'lavender', plantB: 'thyme', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.POLLINATION_BOOST],
        notes: 'Both attract pollinators'
    },

    // MINT relationships
    {
        plantA: 'mint', plantB: 'cabbage', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Mint deters cabbage moths'
    },
    {
        plantA: 'mint', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Deters aphids and tomato hornworm'
    },
    {
        plantA: 'mint', plantB: 'parsley', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.SPACE_COMPETITION],
        notes: 'Mint can overtake parsley'
    },

    // STRAWBERRY relationships
    {
        plantA: 'strawberry', plantB: 'lettuce', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE, REASONS.GROUND_COVER],
        notes: 'Great ground cover partners, different root depths'
    },
    {
        plantA: 'strawberry', plantB: 'spinach', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE],
        notes: 'Similar growing needs, share space well'
    },
    {
        plantA: 'strawberry', plantB: 'borage', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.POLLINATION_BOOST, REASONS.PEST_REPELLENT],
        notes: 'Borage boosts strawberry pollination and deters pests'
    },
    {
        plantA: 'strawberry', plantB: 'thyme', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Thyme repels worms that attack strawberries'
    },
    {
        plantA: 'strawberry', plantB: 'garlic', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Garlic deters spider mites and aphids from strawberries'
    },
    {
        plantA: 'strawberry', plantB: 'cabbage', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.NUTRIENT_COMPETITION],
        notes: 'Brassicas compete for nutrients with strawberries'
    },

    // BLUEBERRY relationships
    {
        plantA: 'blueberry', plantB: 'strawberry', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE],
        notes: 'Both prefer acidic soil, different root depths'
    },
    {
        plantA: 'blueberry', plantB: 'basil', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Basil helps repel pests from blueberry bushes'
    },

    // PUMPKIN relationships
    {
        plantA: 'pumpkin', plantB: 'corn', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.GROUND_COVER, REASONS.SHADE_SUPPORT],
        notes: 'Three Sisters variation - pumpkins shade soil under corn'
    },
    {
        plantA: 'pumpkin', plantB: 'bean', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.NITROGEN_FIXING, REASONS.GROUND_COVER],
        notes: 'Beans fix nitrogen pumpkins need, classic Three Sisters'
    },
    {
        plantA: 'pumpkin', plantB: 'marigold', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Marigolds deter squash bugs and beetles'
    },
    {
        plantA: 'pumpkin', plantB: 'nasturtium', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.TRAP_CROP],
        notes: 'Nasturtiums lure squash beetles away'
    },
    {
        plantA: 'pumpkin', plantB: 'potato', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.NUTRIENT_COMPETITION, REASONS.SPACE_COMPETITION],
        notes: 'Both heavy feeders, compete for space'
    },

    // WATERMELON relationships
    {
        plantA: 'watermelon', plantB: 'corn', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.SHADE_SUPPORT],
        notes: 'Corn provides light shade for watermelon vines'
    },
    {
        plantA: 'watermelon', plantB: 'sunflower', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.POLLINATION_BOOST],
        notes: 'Sunflowers attract pollinators for watermelon'
    },
    {
        plantA: 'watermelon', plantB: 'marigold', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Marigolds repel nematodes and beetles'
    },
    {
        plantA: 'watermelon', plantB: 'potato', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.NUTRIENT_COMPETITION],
        notes: 'Both heavy feeders, poor neighbors'
    },

    // RASPBERRY relationships
    {
        plantA: 'raspberry', plantB: 'garlic', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Garlic deters Japanese beetles from raspberry'
    },
    {
        plantA: 'raspberry', plantB: 'marigold', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Marigolds help repel pests around cane fruit'
    },
    {
        plantA: 'raspberry', plantB: 'potato', relationship: RELATIONSHIP.AVOID,
        reasons: [REASONS.DISEASE_SPREAD],
        notes: 'Potatoes can spread blight to raspberries'
    },

    // ARUGULA relationships
    {
        plantA: 'arugula', plantB: 'lettuce', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE],
        notes: 'Similar growing needs, great salad garden neighbors'
    },
    {
        plantA: 'arugula', plantB: 'carrot', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.ROOT_DEPTH_COMPATIBLE],
        notes: 'Shallow arugula pairs well with deep carrots'
    },

    // OKRA relationships
    {
        plantA: 'okra', plantB: 'pepper', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.SHADE_SUPPORT],
        notes: 'Okra provides light shade for peppers in hot climates'
    },
    {
        plantA: 'okra', plantB: 'basil', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Basil repels aphids and flea beetles from okra'
    },

    // GRAPE relationships
    {
        plantA: 'grape', plantB: 'basil', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Basil helps deter pests from grape vines'
    },
    {
        plantA: 'grape', plantB: 'rosemary', relationship: RELATIONSHIP.BENEFICIAL,
        reasons: [REASONS.PEST_REPELLENT],
        notes: 'Rosemary deters grape pests'
    },

    // EXTENDED COMPANION RULES
    { plantA: 'squash', plantB: 'corn', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.GROUND_COVER, REASONS.SHADE_SUPPORT], notes: 'Three sisters combo' },
    { plantA: 'squash', plantB: 'bean', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.NITROGEN_FIXING], notes: 'Beans provide nitrogen for heavy-feeding squash' },
    { plantA: 'squash', plantB: 'nasturtium', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.TRAP_CROP], notes: 'Nasturtiums trap squash bugs' },
    { plantA: 'squash', plantB: 'potato', relationship: RELATIONSHIP.AVOID, reasons: [REASONS.NUTRIENT_COMPETITION], notes: 'Both heavy feeders, poor neighbors' },
    { plantA: 'bellpepper', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.ROOT_DEPTH_COMPATIBLE], notes: 'Similar growing needs, good companions' },
    { plantA: 'bellpepper', plantB: 'basil', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT, REASONS.FLAVOR_ENHANCEMENT], notes: 'Basil repels aphids from peppers' },
    { plantA: 'bellpepper', plantB: 'fennel', relationship: RELATIONSHIP.AVOID, reasons: [REASONS.ALLELOPATHY], notes: 'Fennel inhibits pepper growth' },
    { plantA: 'jalapeno', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.ROOT_DEPTH_COMPATIBLE], notes: 'Same family, similar needs' },
    { plantA: 'cherrytomato', plantB: 'basil', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT, REASONS.FLAVOR_ENHANCEMENT], notes: 'Classic pairing' },
    { plantA: 'bokchoy', plantB: 'garlic', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Garlic deters flea beetles from bok choy' },
    { plantA: 'bokchoy', plantB: 'dill', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Dill attracts beneficial insects' },
    { plantA: 'snowpea', plantB: 'carrot', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.NITROGEN_FIXING, REASONS.ROOT_DEPTH_COMPATIBLE], notes: 'Peas fix nitrogen, carrots go deep' },
    { plantA: 'snowpea', plantB: 'onion', relationship: RELATIONSHIP.AVOID, reasons: [REASONS.ALLELOPATHY], notes: 'Alliums stunt pea growth' },
    { plantA: 'favabean', plantB: 'potato', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.NITROGEN_FIXING], notes: 'Favas fix nitrogen for potatoes' },
    { plantA: 'kohlrabi', plantB: 'beet', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.ROOT_DEPTH_COMPATIBLE], notes: 'Different root zones, share space well' },
    { plantA: 'mustardgreens', plantB: 'lettuce', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.ROOT_DEPTH_COMPATIBLE], notes: 'Quick growers, interplant well' },
    { plantA: 'collardgreens', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Tomatoes repel flea beetles from collards' },
    { plantA: 'tomatillo', plantB: 'basil', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Basil repels aphids from tomatillos' },
    { plantA: 'rhubarb', plantB: 'garlic', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Garlic deters rhubarb curculio' },
    { plantA: 'marjoram', plantB: 'pepper', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.FLAVOR_ENHANCEMENT], notes: 'Marjoram enhances pepper flavor' },
    { plantA: 'lemongrass', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Citronella compounds repel whitefly' },
    { plantA: 'lemonverbena', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Lemon scent repels many pests' },
    { plantA: 'comfrey', plantB: 'apple', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.NUTRIENT_ACCUMULATOR], notes: 'Deep roots mine nutrients for fruit trees' },
    { plantA: 'comfrey', plantB: 'pear', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.NUTRIENT_ACCUMULATOR], notes: 'Excellent ground cover under fruit trees' },
    { plantA: 'yarrow', plantB: 'tomato', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT, REASONS.POLLINATION_BOOST], notes: 'Attracts beneficial predators' },
    { plantA: 'catnip', plantB: 'squash', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Repels squash bugs effectively' },
    { plantA: 'hyssop', plantB: 'cabbage', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Deters cabbage moth' },
    { plantA: 'rue', plantB: 'basil', relationship: RELATIONSHIP.AVOID, reasons: [REASONS.ALLELOPATHY], notes: 'Rue inhibits basil growth' },
    { plantA: 'wormwood', plantB: 'pea', relationship: RELATIONSHIP.AVOID, reasons: [REASONS.ALLELOPATHY], notes: 'Wormwood inhibits most plants nearby' },
    { plantA: 'rose', plantB: 'garlic', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Garlic deters aphids from roses' },
    { plantA: 'rose', plantB: 'marigold', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Marigolds repel nematodes around roses' },
    { plantA: 'rose', plantB: 'lavender', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT, REASONS.POLLINATION_BOOST], notes: 'Classic cottage garden pairing' },
    { plantA: 'tulip', plantB: 'garlic', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Allium relatives, garlic deters bulb pests' },
    { plantA: 'peony', plantB: 'rose', relationship: RELATIONSHIP.AVOID, reasons: [REASONS.SPACE_COMPETITION], notes: 'Both demand space and nutrients' },
    { plantA: 'hydrangea', plantB: 'blueberry', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.ROOT_DEPTH_COMPATIBLE], notes: 'Both love acidic soil' },
    { plantA: 'foxglove', plantB: 'apple', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.POLLINATION_BOOST], notes: 'Attracts pollinators for fruit set' },
    { plantA: 'lupine', plantB: 'corn', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.NITROGEN_FIXING], notes: 'Lupines fix nitrogen like other legumes' },
    { plantA: 'apple', plantB: 'chive', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Chives prevent apple scab' },
    { plantA: 'apple', plantB: 'nasturtium', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.TRAP_CROP], notes: 'Nasturtiums trap codling moth' },
    { plantA: 'peach', plantB: 'garlic', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Garlic deters peach borers' },
    { plantA: 'cherry', plantB: 'chive', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Alliums repel borers from stone fruit' },
    { plantA: 'fig', plantB: 'rue', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Rue deters fig fruit fly' },
    { plantA: 'lemon', plantB: 'basil', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Basil repels citrus pests' },
    { plantA: 'orange', plantB: 'marigold', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.PEST_REPELLENT], notes: 'Marigolds deter citrus nematodes' },
    { plantA: 'blackberry', plantB: 'borage', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.POLLINATION_BOOST], notes: 'Borage attracts pollinators for berries' },
    { plantA: 'blackberry', plantB: 'potato', relationship: RELATIONSHIP.AVOID, reasons: [REASONS.DISEASE_SPREAD], notes: 'Potatoes can spread blight to brambles' },
    { plantA: 'kiwi', plantB: 'grape', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.ROOT_DEPTH_COMPATIBLE], notes: 'Both vigorous vines, similar culture' },
    { plantA: 'banana', plantB: 'sweet_potato', relationship: RELATIONSHIP.BENEFICIAL, reasons: [REASONS.GROUND_COVER], notes: 'Sweet potato covers ground under banana' }
];



/**
 * Get relationship between two plants
 */
export function getRelationship(plantAId, plantBId) {
    return companionRules.find(rule =>
        (rule.plantA === plantAId && rule.plantB === plantBId) ||
        (rule.plantA === plantBId && rule.plantB === plantAId)
    );
}

/**
 * Get all companions for a plant
 */
export function getCompanions(plantId) {
    const beneficial = [];
    const avoid = [];

    companionRules.forEach(rule => {
        if (rule.plantA === plantId || rule.plantB === plantId) {
            const otherId = rule.plantA === plantId ? rule.plantB : rule.plantA;
            const entry = { plantId: otherId, ...rule };

            if (rule.relationship === RELATIONSHIP.BENEFICIAL) {
                beneficial.push(entry);
            } else if (rule.relationship === RELATIONSHIP.AVOID) {
                avoid.push(entry);
            }
        }
    });

    return { beneficial, avoid };
}

/**
 * Check if two plants have a conflict
 */
export function hasConflict(plantAId, plantBId) {
    const relationship = getRelationship(plantAId, plantBId);
    return relationship?.relationship === RELATIONSHIP.AVOID;
}

/**
 * Check if two plants are beneficial companions
 */
export function isBeneficial(plantAId, plantBId) {
    const relationship = getRelationship(plantAId, plantBId);
    return relationship?.relationship === RELATIONSHIP.BENEFICIAL;
}
