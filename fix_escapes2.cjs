const fs = require('fs');
let c = fs.readFileSync('src/data/plantNamesEl.js', 'utf8');

c = c.replace(/name: 'Za\\\\'atar'/g, "name: 'Za\\'atar'");
c = c.replace(/en: 'Za\\\\'atar'/g, "en: 'Za\\'atar'");

c = c.replace(/name: 'Four O\\\\'Clock'/g, "name: 'Four O\\'Clock'");
c = c.replace(/en: 'Four O\\\\'Clock'/g, "en: 'Four O\\'Clock'");

c = c.replace(/St\. John\\\\'s/g, "St. John\\'s");
c = c.replace(/Lamb\\\\'s/g, "Lamb\\'s");
c = c.replace(/Solomon\\\\'s/g, "Solomon\\'s");
c = c.replace(/Buddha\\\\'s/g, "Buddha\\'s");
c = c.replace(/Turk\\\\'s/g, "Turk\\'s");

fs.writeFileSync('src/data/plantNamesEl.js', c);
console.log("Done");
