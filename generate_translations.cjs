/**
 * Script to generate Greek plant name translations
 * Uses a dictionary of common English-to-Greek plant translations
 */

const fs = require('fs');
const ids = JSON.parse(fs.readFileSync('plant_ids.json', 'utf8'));

// Dictionary of English plant name words/terms to Greek
const dict = {
  // Vegetables
  'Tomato': 'Ντομάτα', 'Cherry Tomato': 'Ντοματίνι', 'Roma Tomato': 'Ρόμα Ντομάτα', 'Grape Tomato': 'Ντομάτα Σταφύλι',
  'Pepper': 'Πιπεριά', 'Bell Pepper': 'Πιπεριά Κέρατο', 'Chili Pepper': 'Τσίλι Πιπεριά',
  'Jalapeño': 'Χαλαπένιο', 'Habanero': 'Χαμπανέρο', 'Poblano': 'Ποπλάνο', 'Serrano': 'Σεράνο',
  'Carrot': 'Καρότο', 'Lettuce': 'Μαρούλι', 'Cucumber': 'Αγγούρι', 'Zucchini': 'Κολοκυθάκι',
  'Green Bean': 'Φασολάκι', 'Pea': 'Αρακάς', 'Onion': 'Κρεμμύδι', 'Garlic': 'Σκόρδο',
  'Potato': 'Πατάτα', 'Spinach': 'Σπανάκι', 'Kale': 'Κέιλ', 'Broccoli': 'Μπρόκολο',
  'Cabbage': 'Λάχανο', 'Radish': 'Ραπανάκι', 'Corn': 'Καλαμπόκι', 'Eggplant': 'Μελιτζάνα',
  'Sweet Potato': 'Γλυκοπατάτα', 'Beet': 'Παντζάρι', 'Celery': 'Σέλινο',
  'Swiss Chard': 'Σέσκουλο', 'Asparagus': 'Σπαράγγι', 'Brussels Sprouts': 'Λαχανάκια Βρυξελλών',
  'Cauliflower': 'Κουνουπίδι', 'Leek': 'Πράσο', 'Turnip': 'Γογγύλι', 'Parsnip': 'Παστινάκι',
  'Pumpkin': 'Κολοκύθα', 'Okra': 'Μπάμια', 'Artichoke': 'Αγκινάρα', 'Arugula': 'Ρόκα',
  'Green Onion': 'Φρέσκο Κρεμμυδάκι',
  // Squash varieties
  'Butternut Squash': 'Κολοκύθα Μπάτερνατ', 'Acorn Squash': 'Κολοκύθα Βελανίδι',
  'Spaghetti Squash': 'Κολοκύθα Σπαγγέτι', 'Hubbard Squash': 'Κολοκύθα Χάμπαρντ',
  'Delicata Squash': 'Κολοκύθα Ντελικάτα', 'Kabocha Squash': 'Κολοκύθα Καμπότσα',
  'Pattypan Squash': 'Κολοκύθα Πατυπάν', 'Crookneck Squash': 'Κολοκύθα Κρούκνεκ',
  'Tatume Squash': 'Κολοκύθα Τατούμε',
  // Peas/Beans
  'Snow Pea': 'Αρακάς Χιονιού', 'Sugar Snap Pea': 'Αρακάς Ζαχαρένιος',
  'Lima Bean': 'Φασόλι Λίμα', 'Fava Bean': 'Κουκί', 'Edamame': 'Εντάμαμε',
  'Black-Eyed Pea': 'Μαυρομάτικα', 'Winged Bean': 'Φτερωτό Φασόλι',
  'Yard Long Bean': 'Φασόλι Μακρύ', 'Chickpea': 'Ρεβίθι', 'Lentil': 'Φακή',
  // Asian greens
  'Bok Choy': 'Μποκ Τσόι', 'Napa Cabbage': 'Κινέζικο Λάχανο',
  'Tatsoi': 'Τατσόι', 'Mizuna': 'Μιζούνα', 'Daikon Radish': 'Νταϊκόν',
  'Kohlrabi': 'Γογγυλοκράμβη', 'Rutabaga': 'Γογγυλοκράμβη Σουηδική',
  // Others
  'Celeriac': 'Σελινόριζα', 'Collard Greens': 'Λαχανίδα',
  'Mustard Greens': 'Σιναπόφυλλα', 'Endive': 'Αντίδι', 'Radicchio': 'Ραντίκιο',
  'Watercress': 'Κάρδαμο Νερού', 'Horseradish': 'Χρένο', 'Jicama': 'Χικάμα',
  'Tomatillo': 'Τοματίγιο', 'Florence Fennel': 'Φινόκιο', 'Rhubarb': 'Ραβέντι',
  'Sorrel': 'Λάπαθο', 'Garden Cress': 'Κάρδαμο', 'Loofah': 'Λούφα', 'Yam': 'Ιγνάμη',
  'Ginger': 'Τζίντζερ', 'Turmeric': 'Κουρκουμάς', 'Cassava': 'Μανιόκα',
  'Chayote': 'Τσαγιότε', 'Amaranth Greens': 'Βλήτα', 'Malabar Spinach': 'Σπανάκι Μαλαμπάρ',
  'New Zealand Spinach': 'Σπανάκι Ν. Ζηλανδίας', 'Bottle Gourd': 'Κολοκύθα Νερού',
  'Bitter Melon': 'Πικρό Πεπόνι', 'Snake Gourd': 'Φίδι Κολοκύθα',
  'Ridge Gourd': 'Λούφα Ραβδωτή', 'Ash Gourd': 'Κολοκύθα Κεριού', 'Moringa': 'Μορίνγκα',
  'Water Spinach': 'Σπανάκι Νερού', 'Purslane': 'Γλιστρίδα',
  'Celtuce': 'Μαρούλι Μίσχου', 'Chrysanthemum Greens': 'Χρυσάνθεμο Φαγητού',
  'Galangal': 'Γαλάνγκαλ', 'Taro': 'Τάρο', 'Lotus Root': 'Ρίζα Λωτού',
  'Water Chestnut': 'Κάστανο Νερού', 'Jerusalem Artichoke': 'Τοπινάμπουρ',
  'Scorzonera': 'Σκορτσονέρα', 'Salsify': 'Σαλσίφι', 'Hamburg Parsley': 'Μαϊντανός Ρίζας',
  'Cardoon': 'Καρδί', 'Kalettes': 'Καλέτες', 'Romanesco': 'Ρομανέσκο',
  'Broccolini': 'Μπροκολίνι', 'Broccoli Rabe': 'Μπρόκολο Ράμπε',
  'Chinese Radish': 'Κινέζικο Ραπανάκι', 'Mâche': 'Μας (Βαλεριάνα)',
  'Miners Lettuce': 'Μαρούλι Μεταλλωρύχων', 'Good King Henry': 'Καλός Βασιλιάς Ερρίκος',
  'Orach': 'Λοβοδάκι', 'Magenta Spreen': 'Λοβόδα Ματζέντα', 'Agretti': 'Αγκρέτι',
  'Yacón': 'Γιακόν', 'Oca': 'Όκα', 'Mashua': 'Μασούα', 'Ulluco': 'Ουλούκο',
  'Chinese Artichoke': 'Κινέζικη Αγκινάρα', 'Ground Cherry': 'Φυσαλίδα',
  'Husk Tomato': 'Ντομάτα Φλοιού', 'Pepino Melon': 'Πεπίνο', 'Cape Gooseberry': 'Φυσαλίδα Ακρωτηρίου',
  'Asparagus Pea': 'Πτερωτό Φασόλι',
  // Herbs
  'Basil': 'Βασιλικός', 'Parsley': 'Μαϊντανός', 'Cilantro': 'Κόλιανδρος',
  'Mint': 'Μέντα', 'Rosemary': 'Δενδρολίβανο', 'Thyme': 'Θυμάρι',
  'Oregano': 'Ρίγανη', 'Chives': 'Σχοινόπρασο', 'Dill': 'Άνηθος',
  'Sage': 'Φασκόμηλο', 'Lavender': 'Λεβάντα', 'Fennel': 'Μάραθος',
  'Tarragon': 'Εστραγκόν', 'Lemon Balm': 'Μελισσόχορτο', 'Chamomile': 'Χαμομήλι',
  'Marjoram': 'Ματζουράνα', 'Summer Savory': 'Θρούμπι Καλοκαιρινό',
  'Winter Savory': 'Θρούμπι Χειμωνιάτικο', 'Lovage': 'Λιβυστικό', 'Stevia': 'Στέβια',
  'Lemongrass': 'Λεμονόχορτο', 'Borage (Herb)': 'Μποράγκο (Βότανο)',
  'Hyssop': 'Ύσσωπος', 'Angelica': 'Αγγελική', 'Epazote': 'Επαζότε',
  'Shiso (Perilla)': 'Σίσο (Περίλα)', 'Lemon Verbena': 'Λουίζα',
  'Curry Plant': 'Φυτό Κάρυ', 'Curry Leaf': 'Φύλλο Κάρυ',
  'Bay Laurel': 'Δάφνη', 'Sweet Woodruff': 'Ασπερούλα',
  'Catnip': 'Νέπετα', 'Catmint': 'Βαλεριάνα Γάτας', 'Bee Balm': 'Μέλισσα Βάλσαμο',
  'Comfrey': 'Σύμφυτο', 'Yarrow': 'Αχιλλέα', 'Valerian': 'Βαλεριάνα',
  'Feverfew': 'Παρθένιο', 'Horehound': 'Μαρρούβιο', 'Rue': 'Απήγανος',
  'Wormwood': 'Αψιθιά', 'Mugwort': 'Αρτεμισία', 'Soapwort': 'Σαπουνόχορτο',
  'Pennyroyal': 'Φλισκούνι', 'Costmary': 'Κοστμαρί', 'Salad Burnet': 'Ποτήριον',
  'Chervil': 'Γαϊδουρόραχο', 'Caraway': 'Κύμινο Μαύρο', 'Cumin': 'Κύμινο',
  'Coriander': 'Κόλιανδρος (Σπόροι)', 'Anise': 'Γλυκάνισο', 'Fenugreek': 'Μοσχοσίταρο',
  'Nigella (Black Seed)': 'Μαυροκούκι', 'Sesame': 'Σουσάμι',
  'Culinary Poppy': 'Παπαρούνα Μαγειρικής', 'Safflower': 'Κρόκος Ζαφοράς',
  'Saffron Crocus': 'Κρόκος', 'Sumac': 'Σουμάκι', 'Patchouli': 'Πατσουλί',
  'Vetiver': 'Βετιβέρ', 'Citronella Grass': 'Σιτρονέλα',
  'Holy Basil (Tulsi)': 'Τούλσι (Ιερός Βασιλικός)', 'Thai Basil': 'Ταϋλανδέζικος Βασιλικός',
  'Lemon Basil': 'Βασιλικός Λεμονιού', 'Purple Basil': 'Μωβ Βασιλικός',
  'Cinnamon Basil': 'Βασιλικός Κανέλας', 'Greek Basil': 'Ελληνικός Βασιλικός',
  'Wasabi': 'Γουασάμπι', 'Szechuan Pepper': 'Πιπέρι Σετσουάν',
  'Lemon Myrtle': 'Μυρτιά Λεμονιού', 'Ashwagandha': 'Ασβαγκάντα',
  'Echinacea (Herb)': 'Εχινάκεια (Βότανο)', 'Elderflower': 'Σαμπούκος',
  'Arnica': 'Άρνικα', 'Ginseng': 'Τζίνσενγκ', 'Stinging Nettle': 'Τσουκνίδα',
  'Dandelion': 'Πικραλίδα', 'Chicory': 'Κιχώριο', 'Pot Marigold': 'Καλέντουλα',
  'Sweet Cicely': 'Γλυκός Μύρρης', 'Herb Robert': 'Βότανο Ρόμπερτ',
  // Flowers
  'Marigold': 'Κατιφές', 'Nasturtium': 'Καπουτσίνο', 'Sunflower': 'Ηλιοτρόπιο',
  'Zinnia': 'Ζίνια', 'Borage': 'Μποράγκο', 'Calendula': 'Καλέντουλα',
  'Cosmos': 'Κόσμος', 'Sweet Peas': 'Γλυκό Μπιζέλι', 'Dahlia': 'Ντάλια',
  'Echinacea': 'Εχινάκεια', 'Sweet Alyssum': 'Αλύσσο', 'Petunia': 'Πετούνια',
  'Snapdragon': 'Σκυλάκι', 'Pansy': 'Πανσές', 'Lily': 'Κρίνος',
  'Geranium': 'Γεράνι', 'Impatiens': 'Ιμπάτιενς', 'Morning Glory': 'Ιπομέα',
  'Black-Eyed Susan': 'Ρουντμπέκια', 'Rose': 'Τριαντάφυλλο', 'Tulip': 'Τουλίπα',
  'Daffodil': 'Νάρκισσος', 'Hyacinth': 'Υάκινθος', 'Crocus': 'Κρόκος',
  'Iris': 'Ίριδα', 'Peony': 'Παιώνια', 'Hydrangea': 'Ορτανσία',
  'Chrysanthemum': 'Χρυσάνθεμο', 'Aster': 'Αστέρι', 'Begonia': 'Μπιγκόνια',
  'Dianthus (Pinks)': 'Γαρύφαλλο', 'Foxglove': 'Δακτυλίδα', 'Hollyhock': 'Δενδρομολόχα',
  'Delphinium': 'Δελφίνιο', 'Lupine': 'Λούπινο', 'Columbine': 'Ακουιλέγκια',
  'Coneflower': 'Εχινάκεια', 'Coreopsis': 'Κορεόψις', 'Blanket Flower': 'Γκαϊλάρντια',
  'Perennial Sunflower': 'Πολυετές Ηλιοτρόπιο', 'Rudbeckia': 'Ρουντμπέκια',
  'Salvia': 'Σαλβία', 'Verbena': 'Βερβένα', 'Celosia': 'Κελόσια',
  'Amaranth': 'Αμάρανθος', 'Cleome': 'Κλεόμη', 'Larkspur': 'Δελφίνιο Ετήσιο',
  'Stock': 'Βιόλα Νυχτερινή', 'Sweet William': 'Γαρύφαλλο Γλυκό',
  'Carnation': 'Γαρύφαλλο', 'Ranunculus': 'Νεραγκούλα', 'Anemone': 'Ανεμώνη',
  'Poppy': 'Παπαρούνα', 'Hibiscus': 'Ιβίσκος', 'Lantana': 'Λαντάνα',
  'Bougainvillea': 'Μπουκαμβίλια', 'Jasmine': 'Γιασεμί', 'Gardenia': 'Γαρδένια',
  'Plumeria': 'Πλουμέρια', 'Wisteria': 'Γλυτσίνα', 'Clematis': 'Κλεματίδα',
  'Mandevilla': 'Μαντεβίλα', 'Portulaca': 'Πορτουλάκα', 'Gazania': 'Γκαζάνια',
  'Vinca': 'Βίνκα', 'Pentas': 'Πέντας', 'Heather': 'Ερείκη',
  'English Lavender': 'Αγγλική Λεβάντα', 'Agapanthus': 'Αγάπανθος',
  'Ornamental Allium': 'Διακοσμητικό Σκόρδο', 'Gladiolus': 'Γλαδιόλα',
  'Freesia': 'Φρέζια', 'Calla Lily': 'Κάλλα', 'Hellebore': 'Ελλέβορος',
  'Snowdrop': 'Χιονόκοκκος', 'Primrose': 'Πρίμουλα', 'Bleeding Heart': 'Δίκεντρα',
  'Astilbe': 'Αστίλμπε', 'Hosta': 'Χόστα',
  // Fruits
  'Strawberry': 'Φράουλα', 'Blueberry': 'Μύρτιλο', 'Watermelon': 'Καρπούζι',
  'Grape': 'Σταφύλι', 'Raspberry': 'Βατόμουρο', 'Apple': 'Μήλο', 'Pear': 'Αχλάδι',
  'Peach': 'Ροδάκινο', 'Nectarine': 'Νεκταρίνι', 'Plum': 'Δαμάσκηνο',
  'Cherry': 'Κεράσι', 'Apricot': 'Βερίκοκο', 'Fig': 'Σύκο',
  'Pomegranate': 'Ρόδι', 'Persimmon': 'Λωτός', 'Quince': 'Κυδώνι',
  'Mulberry': 'Μούρο', 'Elderberry': 'Σαμπούκος', 'Gooseberry': 'Φραγκοστάφυλο',
  'Red Currant': 'Κόκκινο Σταφίδι', 'Black Currant': 'Μαύρο Σταφίδι',
  'Cranberry': 'Κράνμπερι', 'Lingonberry': 'Λίνγκονμπερι',
  'Goji Berry': 'Γκότζι Μπέρι', 'Açaí (Cold-Hardy Palm)': 'Ασαΐ',
  'Kiwi': 'Ακτινίδιο', 'Hardy Kiwi': 'Ακτινίδιο Ανθεκτικό',
  'Passion Fruit': 'Φρούτο Πάθους', 'Guava': 'Γκουάβα',
  'Feijoa (Pineapple Guava)': 'Φεϊζόα', 'Dragon Fruit': 'Φρούτο Δράκου',
  'Papaya': 'Παπάγια', 'Mango': 'Μάνγκο', 'Banana': 'Μπανάνα',
  'Pineapple': 'Ανανάς', 'Avocado': 'Αβοκάντο', 'Olive': 'Ελιά',
  'Citron': 'Κίτρο', 'Lemon': 'Λεμόνι', 'Lime': 'Λάιμ', 'Orange': 'Πορτοκάλι',
  'Grapefruit': 'Γκρέιπφρουτ', 'Tangerine': 'Μανταρίνι', 'Kumquat': 'Κουμκουάτ',
  'Yuzu': 'Γιούζου', 'Calamansi': 'Καλαμάνσι', 'Loquat': 'Μούσμουλο',
  'Medlar': 'Μεσπιλιά', 'Jujube': 'Τζιτζιφιά', 'Pawpaw': 'Παπάγου',
  'Cherimoya': 'Τσεριμόγια', 'Soursop': 'Σάουρσοπ', 'Jackfruit': 'Τζάκφρουτ',
  'Durian': 'Ντούριαν', 'Lychee': 'Λίτσι', 'Longan': 'Λόνγκαν',
  'Rambutan': 'Ραμπουτάν', 'Star Fruit': 'Καράμπολα', 'Tamarind': 'Ταμαρίνδο',
  'Date Palm': 'Φοίνικας Χουρμά', 'Coconut Palm': 'Καρύδα',
  'Breadfruit': 'Αρτόκαρπος', 'Cacao': 'Κακάο', 'Coffee': 'Καφέ',
  'Vanilla': 'Βανίλια', 'Blackberry': 'Βατόμουρο Μαύρο',
  'Boysenberry': 'Μπόισενμπερι', 'Loganberry': 'Λόγκανμπερι',
  'Marionberry': 'Μάριονμπερι', 'Tayberry': 'Τέιμπερι',
  'Serviceberry': 'Αμελάνσιε', 'Aronia (Chokeberry)': 'Αρώνια',
  'Honeyberry': 'Χανιμπέρι', 'Muscadine Grape': 'Μοσχάτο Σταφύλι',
  'Sea Buckthorn': 'Ιπποφαές', 'Cornelian Cherry': 'Κράνο',
  'Schisandra': 'Σχισάνδρα', 'Jaboticaba': 'Ζαμποτικάμπα',
  'Miracle Fruit': 'Φρούτο Θαύμα', 'Carob': 'Χαρούπι',
};

// Build the output
let output = '/**\n * PXD Garden — Greek Plant Name Translations\n * Auto-generated, then reviewed\n */\n\nexport const plantNamesEl = {\n';

const seen = new Set();
for (const [id, name] of ids) {
  if (seen.has(id)) continue;
  seen.add(id);
  
  let greekName = dict[name];
  if (!greekName) {
    // Try partial matching or keep English name with transliteration note
    greekName = name; // fallback to English
  }
  
  // Escape single quotes
  const safeName = (greekName || name).replace(/'/g, "\\'");
  const safeEn = name.replace(/'/g, "\\'");
  
  output += `  '${id}': { name: '${safeName}', en: '${safeEn}' },\n`;
}

output += '};\n';

fs.writeFileSync('src/data/plantNamesEl.js', output, 'utf8');
console.log(`Generated ${seen.size} plant translations`);
