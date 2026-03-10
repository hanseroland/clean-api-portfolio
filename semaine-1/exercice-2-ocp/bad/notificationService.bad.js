class NotificationService {

    // this class violates the OCP because it has a method that is open for modification but closed for extension
    // cette classe viole le principe de responsabilité unique et le principe de l'OCP


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