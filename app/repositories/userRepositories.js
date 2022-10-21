const { User }  = require("../models");

module.exports = {

  create(createArgs) {
    return User.create(createArgs);
  },

  update(id, updateArgs) {
    return User.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return User.destroy(id);
  },

  findByPk(id) {
    return User.findByPk(id);
  },

  findOne(id) {
    return User.findOne(id);
  },

  findAll() {
    return User.findAll();
  },

  getTotalUser() {
    return User.count();
  },
};
