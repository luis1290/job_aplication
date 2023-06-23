const userRoute = require('./users.routes');
const companyRoute = require("./companies.routes")
// const orderRoute = require('./orders.routes');

const apiRouter = (app) => {
  app.use(userRoute);
  app.use(companyRoute);
  // app.use(orderRoute);
}

module.exports = apiRouter