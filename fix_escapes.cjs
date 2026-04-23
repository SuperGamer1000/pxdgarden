const fs = require('fs');
const path = 'src/data/plantNamesEl.js';
let content = fs.readFileSync(path, 'utf8');

// The issue: we have things like 'Walker\', en: 'Walker\' }
// The backslash escapes the quote, leaving the string literal unclosed.
// We want to replace \', en: with \\', en: or just fix the quotes.
// Wait, the actual text is `Walker\', en: 'Walker\' }`
// The `\` is a single backslash inside a JS token? No, if it's `Walker\',` it means the string ends with a backslash and then there is a quote.
// Let's just fix it using a generic replace!
// Regex to match: name: '([^']+)\\', en: '([^']+)\\' }
// We want to replace it with: name: '$1\\'$2', en: '$1\\'$2' }
// Actually, no. If the original was "Walker's Low" it got truncated to "Walker" and escaping logic was messed up.
// Let's just remove the backslashes and close the quotes gracefully if needed!
// For example: 'Walker\', en: 'Walker\' } becomes 'Walker', en: 'Walker' }

let replaced = 0;
const lines = content.split('\n');
const fixedLines = lines.map((line, i) => {
  if (line.match(/\\',/)) {
    console.log(`Fixing line ${i + 1}: ${line}`);
    replaced++;
    return line.replace(/\\',/g, "',").replace(/\\' \}/g, "' }");
  } else if (line.match(/\\' \}/)) {
    console.log(`Fixing line ${i + 1} (end): ${line}`);
    replaced++;
    return line.replace(/\\' \}/g, "' }");
  }
  return line;
});

fs.writeFileSync(path, fixedLines.join('\n'));
console.log(`Replaced ${replaced} lines in ${path}`);
