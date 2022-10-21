/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */

const carController = require("./carController");
const authController = require("./authController");

module.exports = {
  carController,
  authController
};
