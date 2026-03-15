class UserController {
    constructor(getUserUse) {
        this.getUser = getUserUse;
    }

    async me(req, res, next) {
        try {
            const user = await this.getUser.execute(req.userId);
            return res.status(200).json({ success: true, data: user });


        } catch (error) {
            next(error);

        }

    }
}

module.exports = UserController;