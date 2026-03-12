const Printer = require('./printer');

class OldPrinter extends Printer {
  // classe fille permet d'imprimer des documents
  print() {
    console.log('Printing document...');
  }
}

module.exports = OldPrinter;
