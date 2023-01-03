const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw error;
    }
  }

  async destroy(UserId) {
    try {
      await User.destroy({
        where: {
          id: UserId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw error;
    }
  }
}

module.exports = UserRepository;
