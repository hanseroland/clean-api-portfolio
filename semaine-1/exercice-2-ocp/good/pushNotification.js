const NotificationProvider = require('./notificationProvider');

class PushNotification extends NotificationProvider {
  // Utilisé pour les notifications push urgentes
  send(user) {
    console.log(`Sending push notification to ${user.deviceId}`);
  }
}

module.exports = PushNotification;
