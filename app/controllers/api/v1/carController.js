/**
 * @file contains request handler of post resource
 * @author Fikri Rahmat Nurhidayat
 */
const carService = require("../../../services/carService");

module.exports = {
  verifyRoles(...allowedRoles){
    return (req, res, next) =>{
        userRole = Object.values(req.user)[0].role;
        if(!userRole) return res.status(401).json({
            status: "FAIL",
            message: "you don't have role",
          });
        const rolesArray = [...allowedRoles];
        const result = rolesArray.includes(userRole);
        if(!result) return res.status(401).json({
            status: "FAIL",
            message: "you don't have permission",
          });
        next();
    }
  },

  list(req, res) {
    carService
      .list()
      .then(({ data, count }) => {
        res.status(200).json({
          status: "OK",
          data: { cars: data },
          meta: { total: count },
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  create(req, res) {
    userEmail = Object.values(req.user)[0].email;
    carService
      .create({
        name: req.body.name,
        rentPerDay: req.body.rentPerDay,
        type: req.body.type,
        image: req.body.image,
        createBy: userEmail
      })
      .then((post) => {
        res.status(201).json({
          status: "Create Car successfully",
          data: post,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  update(req, res) {
    userEmail = Object.values(req.user)[0].email;
    carService
      .update(req.params.id, {
        name: req.body.name,
        rentPerDay: req.body.rentPerDay,
        type: req.body.type,
        image: req.body.image,
        updateBy: userEmail
      })
      .then(() => {
        res.status(200).json({
          status: "Update Car successfully",
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  show(req, res) {
    carService
      .get(req.params.id)
      .then((post) => {
        res.status(200).json({
          status: "OK",
          data: post,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  destroy(req, res) {
    userEmail = Object.values(req.user)[0].email;
    carService
      .delete(req.params.id)
      .then(() => {
        res.status(200).json({
          status: `Delete Car successfully By ${userEmail}`,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },
};
