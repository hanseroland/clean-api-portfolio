class SmsNotification extends NotificationProvider {
    // Canal secondaire pour les alertes rapides
    send(user) {
        console.log(`Sending SMS to ${user.phone}`);
    }
}

module.exports = SmsNotification;
