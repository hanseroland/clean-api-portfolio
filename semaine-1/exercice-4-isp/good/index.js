const RobotWorker = require('./robotWorker');
const HumanWorker = require('./humanWorker');


function workerWork(worker) {
    worker.work();
}

function workerSleep(worker) {
    worker.sleep();
}

function workerEat(worker) {
    worker.eat();
}

workerWork(new RobotWorker());

workerWork(new HumanWorker());
workerSleep(new HumanWorker());
workerEat(new HumanWorker());
