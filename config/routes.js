const express = require("express");
const controllers = require("../app/controllers");
const YAML = require('yamljs')
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = YAML.load("./openApi.yaml")

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */

apiRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

apiRouter.get("/api/v1/cars", controllers.api.v1.carController.list);
apiRouter.post(
  "/api/v1/cars", 
  controllers.api.v1.authController.authorize,
  controllers.api.v1.carController.verifyRoles("superAdmin", "admin"),
  controllers.api.v1.carController.create
);
apiRouter.put(
  "/api/v1/cars/:id", 
  controllers.api.v1.authController.authorize,
  controllers.api.v1.carController.verifyRoles("superAdmin", "admin"),
  controllers.api.v1.carController.update
);
apiRouter.get('/api/v1/cars/:id', controllers.api.v1.carController.show);
apiRouter.delete(
  "/api/v1/cars/:id",
  controllers.api.v1.authController.authorize,
  controllers.api.v1.carController.verifyRoles("superAdmin", "admin"),
  controllers.api.v1.carController.destroy
);
apiRouter.get("/api/v1/whoami",
  controllers.api.v1.authController.authorize,
  controllers.api.v1.authController.whoAmI
);
apiRouter.post("/api/v1/login", controllers.api.v1.authController.login);
apiRouter.post("/api/v1/register", controllers.api.v1.authController.register);
apiRouter.post(
  "/api/v1/createAdmin", 
  controllers.api.v1.authController.authorize,
  controllers.api.v1.carController.verifyRoles("superAdmin"),
  controllers.api.v1.authController.createAdmin
);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
