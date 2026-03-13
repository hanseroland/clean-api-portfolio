// ❌ VIOLATION ISP — bad/worker.bad.js
// RobotWorker ne peut pas être forcé à implémenter des méthodes inutilesr sans casser le programme
// [1] RobotWorker.eat() throw une Error → brise le contrat de Worker
// [2] RobotWorker.sleep()  throw une Error → brise le contrat de Worker
class Worker {
    work() {
        console.log('Working...');
    }

    eat() {
        console.log('Eating...');
    }

    sleep() {
        console.log('Sleeping...');
    }
}

class HumanWorker extends Worker {
    work() { console.log('Human working...'); }
    eat() { console.log('Human eating...'); }
    sleep() { console.log('Human sleeping...'); }
}

class RobotWorker extends Worker {
    work() { console.log('Robot working...'); }

    eat() {
        throw new Error('Robots do not eat!');
    }

    sleep() {
        throw new Error('Robots do not sleep!');
    }
}

module.exports = { Worker, HumanWorker, RobotWorker };
