
class EmailNotification extends NotificationProvider {
    //this class implements the send method of the NotificationProvider class
    // cette classe implémente la méthode send de la classe NotificationProvider
    send(user) {
        console.log(`Sending email to ${user.email}`);
    }
}

module.exports = EmailNotification;