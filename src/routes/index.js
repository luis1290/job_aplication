const userRoute = require('./users.routes');
// const orderRoute = require('./orders.routes');

const apiRouter = (app) => {
  app.use(userRoute);
  // app.use(orderRoute);
}

module.exports = apiRouter