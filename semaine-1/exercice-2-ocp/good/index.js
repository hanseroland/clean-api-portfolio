// good/index.js
const EmailNotification = require('./emailNotification');
const SmsNotification = require('./smsNotification');
const PushNotification = require('./pushNotification');
const NotificationService = require('./notificationService');

const user = {
    email: 'user@example.com',
    phone: '+221771234567',
    deviceId: 'device-abc-123',
};

// Email
const emailService = new NotificationService(new EmailNotification());
emailService.send(user);

// SMS
const smsService = new NotificationService(new SmsNotification());
smsService.send(user);

// Push
const pushService = new NotificationService(new PushNotification());
pushService.send(user);

// Ajouter WhatsApp demain = ZERO modification du code existant = OCP respecté
