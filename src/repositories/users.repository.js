const { users } = require('../models');

const createUser = async (newUser) => {
  const user = await users.create(newUser);
  return user;
}

const loginUser = async (email) => {
  const user = await users.findOne({
    where: { email }
  });
  return user;
}

const updateUser = async (filename, username, id) => {
  const user = await users.update({
    username: username,
    avatar: filename
  }, {
    where: { id }
  })
  return user;
}

const getUserbyIdAndProductsInCar = async (id) => {
  const user = await users.findByPk(id, {
    attributes: { exclude: ["password", "validUser", "avatar", "firstname", "lastname"] },
    include: [
      {
        model: Cars,
        attributes: ["id", "totalPrice"],
        include: [
          {
            model: ProductsInCar,
            where: { status: false },
            attributes: ["quantity", "price", "status"],
            include: [
              {
                model: Products,
                attributes: { exclude: ["available", "userId"] }
              }
            ]
          }
        ]
      }
    ]
  });
  return user;
}

const getOrdersByUserId = async (id) => {
  const user = await Users.findByPk(id, {
    attributes: { exclude: ["password", "validUser", "firstname", "lastname", "id", "avatar"] },
    include: [
      {
        model: Orders
      }
    ]
  })
  return user;
}

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getUserbyIdAndProductsInCar,
  getOrdersByUserId
}