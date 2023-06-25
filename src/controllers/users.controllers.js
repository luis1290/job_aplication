const UserServices = require("../services/users.services");

const createUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hash = await UserServices.hashed(password)
    await UserServices.createNewUser({ name, email, password: hash });
    res.status(201).send()
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

const getAplicationByUserController = async(req, res, next) => {
  try {
    const {id} = req.params
    console.log('entra al controlador')
    const userAplication = await UserServices.getAplicationByUserServices(id)
    res.json(userAplication);
  } catch (error) {
     next(error)
  }
};

module.exports = {
  createUserController,
  getAplicationByUserController,
  login
}