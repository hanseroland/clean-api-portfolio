class UserController {
    constructor(getUserUse) {
        this.getUser = getUserUse;
    }

    async me(req, res) {
        try {
            const user = await this.getUser.execute(req.userId);
            return res.status(200).json({ success: true, data: user });


        } catch (error) {
            return res.status(404).json({ success: false, message: 'User not found' });

        }

    }
}

module.exports = UserController;