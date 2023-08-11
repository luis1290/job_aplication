const UserServices = require("../services/users.services");
const { sendWelcomeMail } = require("../utils/sendMails");
const { users } = require('../models');
const jwt = require("jsonwebtoken");

const createUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hash = await UserServices.hashed(password)
    await UserServices.createNewUser({ name, email, password: hash });
    res.status(201).send()
    const verifyToken = jwt.sign({ name, email }, process.env.JWT_SECRET_EMAIL_VALIDATION, {
      algorithm: "HS512",
      expiresIn: "12h",
    });
    sendWelcomeMail(email, { verifyToken });
  } catch (e) {
    next(e)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.login(email)
    await UserServices.verifyUser(user, next);
    await UserServices.validPassword(password, user, next)
    const { firstname, lastname, id, username, rolId } = user;
    const userData = { firstname, lastname, id, username, email, rolId };
    const token = await UserServices.token(userData)
    userData.token = token;
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

const getAplicationByUserController = async (req, res, next) => {
  try {
    const { id } = req.params
    console.log('entra al controlador')
    const userAplication = await UserServices.getAplicationByUserServices(id)
    res.json(userAplication);
  } catch (error) {
    next(error)
  }
};

const updateUserController = async (req, res, next) => {
  try {
    const { id } = req.params
    const { path } = req.file
    const { filename } = req.file

    const { name } = req.body
    await UserServices.updateUserServices({ name, url_avatar: path, avatar: filename }, id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const validateUserController = async (req, res, next) => {
  try {
    const { token } = req.params;
    const decode = jwt.verify(token, process.env.JWT_SECRET_EMAIL_VALIDATION, {
      algorithms: "HS512",
    })

    if (!decode) {
      next({
        status: 400,
        name: "error de verificacion",
        message: "verificacion incorrecta, solicite informacion "
      })
    }
    await users.update({
      validate_user: true
    }, {
      where: { email: decode.email }
    })
    // await UserServices.validateUserServices(id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createUserController,
  getAplicationByUserController,
  updateUserController,
  login,
  validateUserController
}