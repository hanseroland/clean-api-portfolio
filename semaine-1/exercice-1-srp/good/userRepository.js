class UserRepository {
  async userExists(email) {
    //const user = await User.findOne({ email });
    //return !!user;
    return false;
  }

  async saveUser(userData) {
    /*const user = new User(userData);
        await user.save();
        return user;*/
    return { id: 1, ...userData };
  }
}
module.exports = UserRepository;
