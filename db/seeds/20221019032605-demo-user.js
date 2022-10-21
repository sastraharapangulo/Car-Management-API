'use strict';
const controllers = require("../../app/controllers");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'superadmin@gmail.com',
      encryptedPassword: await controllers.api.v1.authController.encryptPassword("challenge6"),
      role: 'superAdmin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
