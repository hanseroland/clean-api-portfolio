const Printer = require('./printer');

class NewPrinter extends Printer {
  // classe fille permet d'imprimer et de scanner des documents

  scan() {
    console.log('Scanning document...');
  }
}

module.exports = NewPrinter;
