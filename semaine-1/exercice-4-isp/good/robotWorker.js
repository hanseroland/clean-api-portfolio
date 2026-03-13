const Worker = require('./worker');

class RobotWorker extends Worker {
    work() { console.log('Robot working...'); }
}
module.exports = RobotWorker;