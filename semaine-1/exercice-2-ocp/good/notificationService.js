
class NotificationService {

    // this class respects the OCP because it is open for extension but closed for modification
    // cette classe respecte le principe de l'OCP car elle est ouverte à l'extension mais fermée à la modification
    constructor(notificationProvider) {
        this.notificationProvider = notificationProvider;
    }

    send(user) {
        this.notificationProvider.send(user);
    }

}


const provider = new NotificationService(new EmailNotification());
provider.send({ email: 'user@example.com' });

module.exports = NotificationService;