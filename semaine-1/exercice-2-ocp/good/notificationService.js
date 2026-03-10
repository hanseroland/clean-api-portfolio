class NotificationService {
    // Coordonne l'envoi des notifications via un provider
    constructor(notificationProvider) {
        this.notificationProvider = notificationProvider;
    }

    send(user) {
        this.notificationProvider.send(user);
    }
}

module.exports = NotificationService;
