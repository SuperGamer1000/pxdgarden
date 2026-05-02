/**
 * PXD Garden — Translation System
 * Supports English and Greek
 */

import { plantNamesEl } from './plantNamesEl.js';

// Current language state
let currentLang = 'en';

export function setLanguage(lang) {
  currentLang = lang;
}

export function getLanguage() {
  return currentLang;
}

/**
 * Get translated UI string
 */
export function t(key) {
  const strings = UI_STRINGS[currentLang] || UI_STRINGS.en;
  return strings[key] ?? UI_STRINGS.en[key] ?? key;
}

/**
 * Get translated plant name
 */
export function getPlantName(plant) {
  if (currentLang === 'el' && plantNamesEl[plant.id]) {
    return plantNamesEl[plant.id].name || plant.name;
  }
  return plant.name;
}

/**
 * Get translated plant description
 */
export function getPlantDescription(plant) {
  if (currentLang === 'el' && plantNamesEl[plant.id]) {
    return plantNamesEl[plant.id].desc || plant.description;
  }
  return plant.description;
}

/**
 * Get translated reason label
 */
export function getReasonLabel(reasonKey) {
  const labels = REASON_LABELS_I18N[currentLang] || REASON_LABELS_I18N.en;
  return labels[reasonKey] || REASON_LABELS_I18N.en[reasonKey] || reasonKey;
}

/**
 * Get translated seasonal tip
 */
export function getSeasonalTipI18n(season) {
  const tips = SEASONAL_TIPS_I18N[currentLang] || SEASONAL_TIPS_I18N.en;
  return tips[season] || SEASONAL_TIPS_I18N.en[season];
}

/**
 * Get translated watering frequency description
 */
export function getFrequencyDesc(timesPerWeek) {
  const descs = FREQUENCY_DESCS[currentLang] || FREQUENCY_DESCS.en;
  if (timesPerWeek >= 7) return descs.daily;
  if (timesPerWeek >= 5) return descs.every12;
  if (timesPerWeek >= 3) return descs.every23;
  if (timesPerWeek >= 2) return descs.twice;
  return descs.once;
}

/**
 * Get translated weather advice
 */
export function getWeatherAdviceI18n(weather) {
  const advice = WEATHER_ADVICE_I18N[currentLang] || WEATHER_ADVICE_I18N.en;
  return advice[weather] || WEATHER_ADVICE_I18N.en[weather] || WEATHER_ADVICE_I18N.en.mild;
}

/**
 * Get translated watering tips array
 */
export function getWateringTipI18n(key) {
  const tips = WATERING_TIPS_I18N[currentLang] || WATERING_TIPS_I18N.en;
  return tips[key] || WATERING_TIPS_I18N.en[key] || '';
}

/**
 * Generate translated microcopy
 */
export function generateMicrocopyI18n(plantAName, plantBName, relationship, reasons) {
  const mc = MICROCOPY_I18N[currentLang] || MICROCOPY_I18N.en;
  const type = relationship;

  if (type === 'beneficial') {
    if (reasons.includes('pest_repellent'))
      return mc.beneficial_pest.replace('{A}', plantAName).replace('{B}', plantBName);
    if (reasons.includes('nitrogen_fixing'))
      return mc.beneficial_nitrogen.replace('{A}', plantAName).replace('{B}', plantBName);
    if (reasons.includes('shade_support'))
      return mc.beneficial_shade.replace('{A}', plantAName).replace('{B}', plantBName);
    if (reasons.includes('pollination_boost'))
      return mc.beneficial_pollination.replace('{A}', plantAName).replace('{B}', plantBName);
    return mc.beneficial_generic.replace('{A}', plantAName).replace('{B}', plantBName);
  }

  if (type === 'avoid') {
    if (reasons.includes('nutrient_competition'))
      return mc.avoid_nutrient;
    if (reasons.includes('disease_spread'))
      return mc.avoid_disease;
    if (reasons.includes('growth_inhibition'))
      return mc.avoid_growth;
    return mc.avoid_generic;
  }

  return mc.neutral.replace('{A}', plantAName).replace('{B}', plantBName);
}

// ===== UI Strings =====
// App UI translations
const UI_STRINGS = {
  en: {
    appTitle: 'PXD Garden',
    plantCatalog: 'Plant Catalog',
    searchPlants: 'Search plants...',
    auto: 'Auto',
    spring: 'Spring', summer: 'Summer', autumn: 'Autumn', winter: 'Winter',
    all: 'All',
    vegetables: 'Vegetables', herbs: 'Herbs', flowers: 'Flowers', fruits: 'Fruits',
    clearGarden: 'Clear Garden',
    companionGuide: 'Companion Guide',
    selectPlantHint: 'Select a plant in your garden to see companion recommendations and spacing tips.',
    dragHint: 'Drag plants here to start your garden',
    dragSubHint: "We'll help you find the perfect companions",
    gardenFull: 'Garden is full! Remove a plant first.',
    cellOccupied: 'This cell already has a plant!',
    clearConfirm: 'Clear all plants from your garden?',
    newGardenPrompt: 'Name your new garden:',
    renameGardenPrompt: 'Rename garden:',
    deleteConfirm: 'Delete "{name}"? This cannot be undone.',
    newBtn: '＋ New',
    growingConditions: '🌱 Growing Conditions',
    gardenType: 'Garden Type',
    sunlight: 'Sunlight',
    weather: 'Weather',
    soil: 'Soil',
    container: '🪴 Container', raisedBed: '📦 Raised Bed', inGround: '🌍 In-Ground',
    fullSun: '☀️ Full Sun', partial: '⛅ Partial', shade: '🌥️ Shade',
    hot: '🔥 Hot', warm: '☀️ Warm', mild: '🌤️ Mild', cool: '🌥️ Cool', cold: '❄️ Cold',
    sandy: '🏖️ Sandy', loamy: '🌱 Loamy', clay: '🧱 Clay',
    spacing: '📏 Spacing',
    idealSpacing: 'Ideal spacing from other plants',
    goodCompanions: '✓ Good Companions',
    keepApart: '✗ Keep Apart',
    companions: 'Companions',
    noCompanions: "We don't have specific companion info for this plant yet.",
    waterNeeds: '💧 Water Needs',
    care: 'Care',
    days: 'days',
    sun: 'sun',
    week: 'week',
    saved: 'Saved!',
    noPlants: 'No plants available for {season}. Try a different season or category.',
    nightMode: 'Toggle night mode',
    lightMode: 'Switch to light mode',
    switchLang: 'Ελληνικά',
    helpTitle: 'How to use PXD Garden',
    helpIntro: 'PXD Garden is an interactive companion planting planner. Here is how to use it:',
    helpStep1: '1. Seasons: Select a season or use Auto mode to see available plants.',
    helpStep2: '2. Catalog: Search or filter plants by category (Vegetables, Herbs, Flowers, Fruits).',
    helpStep3: '3. Planting: Drag and drop plants from the catalog onto the garden grid.',
    helpStep4: '4. Info: Click a placed plant to see its specific companions, care, and watering tips.',
    helpStep5: '5. Compatibility: Green halos indicate good companions, yellow means warning, red means conflict.',
    helpStep6: '6. Settings: Adjust your garden\'s sunlight, weather, soil, and container type for tailored advice.',
    helpStep7: '7. Multiple Gardens: Use the top bar to create, rename, delete, or switch between different gardens.',
    helpStep8: '8. Preferences: Use the top buttons to switch languages or toggle Night Mode.',
    helpClose: 'Close',
  },
  el: {
    appTitle: 'PXD Κήπος',
    plantCatalog: 'Κατάλογος Φυτών',
    searchPlants: 'Αναζήτηση φυτών...',
    auto: 'Αυτόματα',
    spring: 'Άνοιξη', summer: 'Καλοκαίρι', autumn: 'Φθινόπωρο', winter: 'Χειμώνας',
    all: 'Όλα',
    vegetables: 'Λαχανικά', herbs: 'Βότανα', flowers: 'Λουλούδια', fruits: 'Φρούτα',
    clearGarden: 'Καθαρισμός Κήπου',
    companionGuide: 'Οδηγός Συντροφικής Φύτευσης',
    selectPlantHint: 'Επιλέξτε ένα φυτό στον κήπο σας για να δείτε προτάσεις συντροφικής φύτευσης και συμβουλές απόστασης.',
    dragHint: 'Σύρετε φυτά εδώ για να ξεκινήσετε τον κήπο σας',
    dragSubHint: 'Θα σας βοηθήσουμε να βρείτε τους τέλειους συντρόφους',
    gardenFull: 'Ο κήπος είναι γεμάτος! Αφαιρέστε πρώτα ένα φυτό.',
    cellOccupied: 'Αυτό το κελί έχει ήδη φυτό!',
    clearConfirm: 'Καθαρισμός όλων των φυτών από τον κήπο σας;',
    newGardenPrompt: 'Ονομάστε τον νέο σας κήπο:',
    renameGardenPrompt: 'Μετονομασία κήπου:',
    deleteConfirm: 'Διαγραφή "{name}"; Αυτό δεν μπορεί να αναιρεθεί.',
    newBtn: '＋ Νέος',
    growingConditions: '🌱 Συνθήκες Ανάπτυξης',
    gardenType: 'Τύπος Κήπου',
    sunlight: 'Φωτισμός',
    weather: 'Καιρός',
    soil: 'Έδαφος',
    container: '🪴 Γλάστρα', raisedBed: '📦 Υπερυψωμένο', inGround: '🌍 Στο Έδαφος',
    fullSun: '☀️ Πλήρης Ήλιος', partial: '⛅ Μερικός', shade: '🌥️ Σκιά',
    hot: '🔥 Ζεστό', warm: '☀️ Ζεστό', mild: '🌤️ Ήπιο', cool: '🌥️ Δροσερό', cold: '❄️ Κρύο',
    sandy: '🏖️ Αμμώδες', loamy: '🌱 Πηλώδες', clay: '🧱 Αργιλώδες',
    spacing: '📏 Απόσταση',
    idealSpacing: 'Ιδανική απόσταση από άλλα φυτά',
    goodCompanions: '✓ Καλοί Σύντροφοι',
    keepApart: '✗ Κρατήστε Μακριά',
    companions: 'Σύντροφοι',
    noCompanions: "Δεν έχουμε συγκεκριμένες πληροφορίες συντροφικής φύτευσης για αυτό το φυτό ακόμα.",
    waterNeeds: '💧 Ανάγκες Νερού',
    care: 'Φροντίδα',
    days: 'ημέρες',
    sun: 'ήλιος',
    week: 'εβδομάδα',
    saved: 'Αποθηκεύτηκε!',
    noPlants: 'Δεν υπάρχουν φυτά για {season}. Δοκιμάστε διαφορετική εποχή ή κατηγορία.',
    nightMode: 'Εναλλαγή νυχτερινής λειτουργίας',
    lightMode: 'Εναλλαγή σε φωτεινή λειτουργία',
    switchLang: 'English',
    helpTitle: 'Πώς να χρησιμοποιήσετε το PXD Garden',
    helpIntro: 'Το PXD Garden είναι ένας διαδραστικός σχεδιαστής συντροφικής φύτευσης. Δείτε πώς να το χρησιμοποιήσετε:',
    helpStep1: '1. Εποχές: Επιλέξτε εποχή ή τη λειτουργία "Αυτόματα" για να δείτε τα διαθέσιμα φυτά.',
    helpStep2: '2. Κατάλογος: Αναζητήστε ή φιλτράρετε φυτά ανά κατηγορία (Λαχανικά, Βότανα, Λουλούδια, Φρούτα).',
    helpStep3: '3. Φύτευση: Σύρετε φυτά από τον κατάλογο στο πλέγμα του κήπου.',
    helpStep4: '4. Πληροφορίες: Κάντε κλικ σε ένα φυτό για συντρόφους, φροντίδα και συμβουλές ποτίσματος.',
    helpStep5: '5. Συμβατότητα: Πράσινο περίγραμμα = καλοί σύντροφοι, κίτρινο = προειδοποίηση, κόκκινο = σύγκρουση.',
    helpStep6: '6. Ρυθμίσεις: Προσαρμόστε φωτισμό, καιρό, έδαφος και τύπο κήπου για εξατομικευμένες συμβουλές.',
    helpStep7: '7. Πολλαπλοί Κήποι: Χρησιμοποιήστε την επάνω μπάρα για δημιουργία, μετονομασία ή διαγραφή κήπων.',
    helpStep8: '8. Προτιμήσεις: Χρησιμοποιήστε τα επάνω κουμπιά για αλλαγή γλώσσας ή νυχτερινής λειτουργίας.',
    helpClose: 'Κλείσιμο',
  }
};

// ===== Reason Labels =====
const REASON_LABELS_I18N = {
  en: {
    pest_repellent: 'Repels pests',
    nitrogen_fixing: 'Fixes nitrogen',
    beneficial_insects: 'Attracts beneficials',
    shade_support: 'Provides shade',
    pollination_boost: 'Boosts pollination',
    ground_cover: 'Ground cover',
    trap_crop: 'Trap crop',
    flavor_enhancement: 'Enhances flavor',
    growth_support: 'Supports growth',
    nutrient_sharing: 'Shares nutrients',
    disease_reduction: 'Reduces disease',
    root_depth_compatible: 'Compatible roots',
    nutrient_competition: 'Nutrient competition',
    disease_spread: 'Disease spread risk',
    growth_inhibition: 'Inhibits growth',
    space_competition: 'Space competition',
    allelopathy: 'Chemical inhibition',
    nutrient_accumulator: 'Nutrient accumulator',
  },
  el: {
    pest_repellent: 'Απωθεί παράσιτα',
    nitrogen_fixing: 'Δεσμεύει άζωτο',
    beneficial_insects: 'Προσελκύει ωφέλιμα έντομα',
    shade_support: 'Παρέχει σκιά',
    pollination_boost: 'Ενισχύει επικονίαση',
    ground_cover: 'Εδαφοκάλυψη',
    trap_crop: 'Φυτό-παγίδα',
    flavor_enhancement: 'Βελτιώνει γεύση',
    growth_support: 'Υποστηρίζει ανάπτυξη',
    nutrient_sharing: 'Μοιράζεται θρεπτικά',
    disease_reduction: 'Μειώνει ασθένειες',
    root_depth_compatible: 'Συμβατές ρίζες',
    nutrient_competition: 'Ανταγωνισμός θρεπτικών',
    disease_spread: 'Κίνδυνος μετάδοσης ασθενειών',
    growth_inhibition: 'Αναστολή ανάπτυξης',
    space_competition: 'Ανταγωνισμός χώρου',
    allelopathy: 'Χημική αναστολή',
    nutrient_accumulator: 'Συσσωρευτής θρεπτικών',
  }
};

// ===== Seasonal Tips =====
const SEASONAL_TIPS_I18N = {
  en: {
    spring: { title: 'Spring Tips', icon: '🌸', tip: 'Focus on companion planting that boosts early growth and pest prevention. Start with cool-weather crops and their companions.' },
    summer: { title: 'Summer Tips', icon: '☀️', tip: 'Suggest shade-providing companions and moisture-conserving layouts for the hot months ahead.' },
    autumn: { title: 'Autumn Tips', icon: '🍂', tip: 'Encourage soil-restoring companions and late harvest support. Great time to plant garlic and cover crops.' },
    winter: { title: 'Winter Tips', icon: '❄️', tip: 'Limit pairings to cold-tolerant or indoor plants. Plan your spring garden layout now!' },
  },
  el: {
    spring: { title: 'Συμβουλές Άνοιξης', icon: '🌸', tip: 'Εστιάστε στη συντροφική φύτευση που ενισχύει την πρώιμη ανάπτυξη και την πρόληψη παρασίτων.' },
    summer: { title: 'Συμβουλές Καλοκαιριού', icon: '☀️', tip: 'Προτείνετε συντρόφους που παρέχουν σκιά και διατάξεις που εξοικονομούν υγρασία.' },
    autumn: { title: 'Συμβουλές Φθινοπώρου', icon: '🍂', tip: 'Ενθαρρύνετε συντρόφους αποκατάστασης εδάφους. Ιδανική εποχή για φύτευση σκόρδου.' },
    winter: { title: 'Συμβουλές Χειμώνα', icon: '❄️', tip: 'Περιορίστε τα ζευγάρια σε ανθεκτικά στο κρύο φυτά. Σχεδιάστε τον ανοιξιάτικο κήπο σας!' },
  }
};

// ===== Frequency Descriptions =====
const FREQUENCY_DESCS = {
  en: { daily: 'Daily', every12: 'Every 1-2 days', every23: 'Every 2-3 days', twice: '2-3 times weekly', once: 'Once weekly' },
  el: { daily: 'Καθημερινά', every12: 'Κάθε 1-2 ημέρες', every23: 'Κάθε 2-3 ημέρες', twice: '2-3 φορές/εβδομάδα', once: 'Μία φορά/εβδομάδα' }
};

// ===== Weather Advice =====
const WEATHER_ADVICE_I18N = {
  en: {
    hot: { icon: '🔥', title: 'Heat Wave', advice: 'Increase watering by 50%. Water early morning or evening. Consider shade cloth for sensitive plants.' },
    warm: { icon: '☀️', title: 'Warm Weather', advice: 'Plants are actively growing. Water deeply 2-3 times weekly. Check containers daily.' },
    mild: { icon: '🌤️', title: 'Mild Conditions', advice: 'Ideal growing conditions. Follow normal watering schedule. Check soil before watering.' },
    cool: { icon: '🌥️', title: 'Cool Weather', advice: 'Reduce watering by 30%. Water mid-morning. Avoid wetting foliage to prevent fungal issues.' },
    cold: { icon: '❄️', title: 'Cold Weather', advice: 'Minimal watering needed. Most plants are dormant. Only water if soil is bone dry.' },
  },
  el: {
    hot: { icon: '🔥', title: 'Καύσωνας', advice: 'Αυξήστε το πότισμα κατά 50%. Ποτίζετε νωρίς το πρωί ή το βράδυ. Σκεφτείτε σκίαστρο.' },
    warm: { icon: '☀️', title: 'Ζεστός Καιρός', advice: 'Τα φυτά αναπτύσσονται ενεργά. Ποτίζετε βαθιά 2-3 φορές/εβδομάδα.' },
    mild: { icon: '🌤️', title: 'Ήπιες Συνθήκες', advice: 'Ιδανικές συνθήκες ανάπτυξης. Ακολουθήστε κανονικό πρόγραμμα ποτίσματος.' },
    cool: { icon: '🌥️', title: 'Δροσερός Καιρός', advice: 'Μειώστε το πότισμα κατά 30%. Ποτίζετε μέσα στο πρωί. Αποφύγετε βρέξιμο φυλλώματος.' },
    cold: { icon: '❄️', title: 'Κρύος Καιρός', advice: 'Ελάχιστο πότισμα. Τα περισσότερα φυτά είναι σε αδράνεια.' },
  }
};

// ===== Watering Tips =====
const WATERING_TIPS_I18N = {
  en: {
    summer_morning: '💧 Water early morning or evening to reduce evaporation',
    container_heatwave: '🪴 Check containers twice daily in heat waves',
    winter_reduce: '❄️ Reduce watering significantly - overwatering is the main winter killer',
    winter_morning: '⏰ Water mid-morning so soil can warm before evening',
    container_finger: '💡 Stick finger 1" into soil - water only if dry',
    container_drainage: '🚰 Ensure containers have drainage holes',
    mediterranean_dry: '🌿 These herbs prefer to dry out between waterings',
    mediterranean_rot: '⚠️ Overwatering causes root rot - when in doubt, don\'t water',
    fruiting_rot: '🍅 Inconsistent watering causes blossom end rot and cracking',
    fruiting_base: '💦 Water deeply at the base, not leaves',
    leafy_moisture: '🥬 Consistent moisture prevents bitterness and bolting',
    leafy_mulch: '🌱 Mulch to retain moisture and keep roots cool',
    heavy_feeder: '🌱 Heavy feeder - water carries nutrients, so consistent watering helps feeding',
    full_sun_summer: '☀️ Full sun + summer = extra water. Consider shade cloth for leafy greens',
    unknown: 'Unknown plant - use standard watering',
    default_pattern: 'Water when top inch of soil is dry',
  },
  el: {
    summer_morning: '💧 Ποτίζετε νωρίς το πρωί ή το βράδυ για μείωση εξάτμισης',
    container_heatwave: '🪴 Ελέγχετε τις γλάστρες δύο φορές/ημέρα σε καύσωνα',
    winter_reduce: '❄️ Μειώστε σημαντικά το πότισμα - η υπερβολική υγρασία σκοτώνει τον χειμώνα',
    winter_morning: '⏰ Ποτίζετε μέσα στο πρωί ώστε το χώμα να ζεσταθεί πριν το βράδυ',
    container_finger: '💡 Βάλτε δάχτυλο 2-3εκ στο χώμα - ποτίστε μόνο αν είναι στεγνό',
    container_drainage: '🚰 Βεβαιωθείτε ότι οι γλάστρες έχουν τρύπες αποστράγγισης',
    mediterranean_dry: '🌿 Αυτά τα βότανα προτιμούν να στεγνώνουν μεταξύ ποτισμάτων',
    mediterranean_rot: '⚠️ Η υπερβολική υγρασία προκαλεί σήψη ριζών',
    fruiting_rot: '🍅 Ανομοιόμορφο πότισμα προκαλεί σήψη και σκάσιμο καρπών',
    fruiting_base: '💦 Ποτίζετε βαθιά στη βάση, όχι στα φύλλα',
    leafy_moisture: '🥬 Σταθερή υγρασία αποτρέπει πικρίλα και πρόωρη ανθοφορία',
    leafy_mulch: '🌱 Εδαφοκάλυψη για διατήρηση υγρασίας και δροσιά ριζών',
    heavy_feeder: '🌱 Απαιτητικό φυτό - το νερό μεταφέρει θρεπτικά, σταθερό πότισμα βοηθά',
    full_sun_summer: '☀️ Πλήρης ήλιος + καλοκαίρι = επιπλέον νερό. Σκεφτείτε σκίαστρο',
    unknown: 'Άγνωστο φυτό - χρησιμοποιήστε τυπικό πότισμα',
    default_pattern: 'Ποτίζετε όταν τα πρώτα 2-3εκ χώματος είναι στεγνά',
  }
};

// ===== Microcopy Templates =====
const MICROCOPY_I18N = {
  en: {
    beneficial_pest: 'These two grow well together — {B} helps keep pests away from {A}.',
    beneficial_nitrogen: 'Great combo! {B} enriches the soil with nitrogen that {A} loves.',
    beneficial_shade: 'Smart pairing — {B} provides welcome shade for {A}.',
    beneficial_pollination: '{B} attracts pollinators that will boost {A}\'s fruit production.',
    beneficial_generic: 'These two make great garden neighbors!',
    avoid_nutrient: 'These plants compete for nutrients. A little more distance would help both.',
    avoid_disease: 'These plants can share diseases easily. Consider keeping them apart.',
    avoid_growth: 'One of these may slow the other\'s growth. Some separation is recommended.',
    avoid_generic: 'These might not be the best neighbors.',
    neutral: '{A} and {B} can grow together without major issues. Just watch your spacing!',
    no_info: "We don't have specific info about this pairing yet.",
  },
  el: {
    beneficial_pest: 'Αυτά τα δύο μεγαλώνουν καλά μαζί — {B} κρατά τα παράσιτα μακριά από {A}.',
    beneficial_nitrogen: 'Τέλειος συνδυασμός! {B} εμπλουτίζει το χώμα με άζωτο που αρέσει στο {A}.',
    beneficial_shade: 'Έξυπνο ζευγάρι — {B} παρέχει σκιά στο {A}.',
    beneficial_pollination: '{B} προσελκύει επικονιαστές που θα ενισχύσουν την καρποφορία του {A}.',
    beneficial_generic: 'Αυτά τα δύο είναι εξαιρετικοί γείτονες στον κήπο!',
    avoid_nutrient: 'Αυτά τα φυτά ανταγωνίζονται για θρεπτικά. Λίγη παραπάνω απόσταση θα βοηθούσε.',
    avoid_disease: 'Αυτά τα φυτά μπορούν να μοιραστούν ασθένειες εύκολα. Κρατήστε τα χωριστά.',
    avoid_growth: 'Ένα από αυτά μπορεί να επιβραδύνει την ανάπτυξη του άλλου.',
    avoid_generic: 'Αυτά μπορεί να μην είναι οι καλύτεροι γείτονες.',
    neutral: '{A} και {B} μπορούν να μεγαλώσουν μαζί χωρίς προβλήματα. Προσέξτε την απόσταση!',
    no_info: 'Δεν έχουμε συγκεκριμένες πληροφορίες για αυτό το ζευγάρι ακόμα.',
  }
};

// ===== Plant Watering Patterns (translated descriptions) =====
export const PATTERN_DESCS_I18N = {
  en: {
    'frequent-light': 'Water lightly every 1-2 days to keep soil consistently moist',
    'deep-infrequent': 'Water deeply 2-3 times per week, allowing soil to dry slightly between',
    'steady-moderate': 'Water moderately 2-3 times per week for even growth',
    'sparse-drought-tolerant': 'Water only when soil is quite dry - every 7-10 days',
    'sparse': 'Drought tolerant once established, water weekly',
    'frequent-moderate': 'Keep soil evenly moist, water every 2-3 days',
    'moderate': 'Water 2-3 times weekly, especially during flowering and pod formation',
    'deep-consistent': 'Deep, consistent watering 2-3 times weekly. Water at base to avoid mildew',
    'deep-weekly': 'Water deeply once or twice weekly once established',
    'standard': 'Water when top inch of soil is dry',
  },
  el: {
    'frequent-light': 'Ποτίζετε ελαφρά κάθε 1-2 ημέρες για σταθερή υγρασία',
    'deep-infrequent': 'Ποτίζετε βαθιά 2-3 φορές/εβδομάδα, αφήνοντας το χώμα να στεγνώσει λίγο',
    'steady-moderate': 'Ποτίζετε μέτρια 2-3 φορές/εβδομάδα για ομοιόμορφη ανάπτυξη',
    'sparse-drought-tolerant': 'Ποτίζετε μόνο όταν το χώμα είναι αρκετά στεγνό - κάθε 7-10 ημέρες',
    'sparse': 'Ανθεκτικό στην ξηρασία, ποτίζετε εβδομαδιαία',
    'frequent-moderate': 'Κρατήστε το χώμα ομοιόμορφα υγρό, ποτίζετε κάθε 2-3 ημέρες',
    'moderate': 'Ποτίζετε 2-3 φορές/εβδομάδα, κυρίως κατά την ανθοφορία',
    'deep-consistent': 'Βαθύ σταθερό πότισμα 2-3 φορές/εβδομάδα. Ποτίζετε στη βάση',
    'deep-weekly': 'Ποτίζετε βαθιά 1-2 φορές/εβδομάδα αφού εγκατασταθεί',
    'standard': 'Ποτίζετε όταν τα πρώτα 2-3εκ χώματος στεγνώσουν',
  }
};
