const Worker = require('./worker');

class HumanWorker extends Worker {
    eat() { console.log('Human eating...'); }
    sleep() { console.log('Human sleeping...'); }
}
module.exports = HumanWorker;