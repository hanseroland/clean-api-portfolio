// ❌ VIOLATION LSP — bad/printer.bad.js
// OldPrinter ne peut pas remplacer Printer sans casser le programme
// [1] OldPrinter.scan() throw une Error → brise le contrat de Printer
// [2] scanDocument(new OldPrinter()) crashe en production

class Printer {
  print() {
    console.log('Printing document...');
  }

  scan() {
    console.log('Scanning document...');
  }
}

class OldPrinter extends Printer {
  print() {
    console.log('Printing document...');
  }

  scan() {
    throw new Error('This printer cannot scan!');
  }
}

function scanDocument(printer) {
  printer.scan();
}

module.exports = { Printer, OldPrinter, scanDocument };
