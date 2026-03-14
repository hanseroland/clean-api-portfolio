const NewPrinter = require('./newPrinter');
const OldPrinter = require('./oldPrinter');

function printDocument(printer) {
    printer.print();
}
function scanDocument(printer) {
    printer.scan();
}

// Les deux peuvent imprimer = LSP respecté
printDocument(new NewPrinter()); // Printing document...
printDocument(new OldPrinter()); // Printing document...

// Seul NewPrinter peut scanner = contrat honnête
scanDocument(new NewPrinter()); // Scanning document...
