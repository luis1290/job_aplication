// Router de express
const { Router } = require("express");

const {
  createUserValidator,
  loginUserValidator,
} = require("../validators/user.validators");

const upload = require("../middlewares/multer.middleware");
const authenticate = require("../middlewares/auth.middleware");
const { createUserController, login } = require("../controllers/users.controllers");



const router = Router();

router.post("/users", createUserValidator, createUserController);

router.post("/users/login", loginUserValidator, login);

// router.put("/users/:id", authenticate, upload, updateUserController );

// router.get("/users/:id", authenticate, getUserbyIdController);

// router.get("/user/orders/:id", authenticate, getOrdersByUserId);

module.exports = router;
