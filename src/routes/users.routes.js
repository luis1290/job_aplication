// Router de express
const { Router } = require("express");

const {
  createUserValidator,
  loginUserValidator,
  updateUserValidator,
} = require("../validators/user.validators");

const upload = require("../middlewares/multer.middleware");
const authenticate = require("../middlewares/auth.middleware");
const { createUserController, login, getAplicationByUserController, updateUserController } = require("../controllers/users.controllers");



const router = Router();

router.post("/users", createUserValidator, createUserController);

router.post("/users/login", loginUserValidator, login);

router.get("/users/:id", getAplicationByUserController);

router.put("/editusers/:id", upload, updateUserController);



// router.get("/user/orders/:id", authenticate, getOrdersByUserId);

module.exports = router;
