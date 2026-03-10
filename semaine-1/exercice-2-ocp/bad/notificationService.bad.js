// ❌ VIOLATION OCP — bad/notificationService.bad.js
// 3 raisons de changer :
// [1] Si on ajoute un canal (WhatsApp, Wave...)  → modifier cette classe
// [2] Si on change le format du message email    → modifier cette classe
// [3] Si on change le format du message SMS      → modifier cette classe

class NotificationService {

    // Méthode send qui envoie des notifications selon le type
    send(user, type) {
        if (type === 'email') {
            console.log(`Sending email to ${user.email}`);
        } else if (type === 'sms') {
            console.log(`Sending SMS to ${user.phone}`);
        } else if (type === 'push') {
            console.log(`Sending push to device ${user.deviceId}`);
        }
    }
}