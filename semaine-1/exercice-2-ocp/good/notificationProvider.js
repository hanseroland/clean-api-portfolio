class NotificationProvider {

    // this method should be implemented by all subclasses
    // cette classe est une abstraction qui permet de respecter le principe de l'OCP

    send(user) {
        throw new Error('Method not implemented');
    }

}

module.exports = NotificationProvider;