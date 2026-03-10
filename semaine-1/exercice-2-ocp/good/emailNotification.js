const NotificationProvider = require('./notificationProvider');

class EmailNotification extends NotificationProvider {
  // Canal prioritaire pour les confirmations de commande
  send(user) {
    console.log(`Sending email to ${user.email}`);
  }
}

module.exports = EmailNotification;
