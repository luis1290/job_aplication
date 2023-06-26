const userRoute = require('./users.routes');
const companyRoute = require("./companies.routes")
const aplicationJobRouter = require('./aplicationjob.routes')
const interviewRouter = require("./interviews.routes")
// const orderRoute = require('./orders.routes');

const apiRouter = (app) => {
  app.use(userRoute);
  app.use(companyRoute);
  app.use(aplicationJobRouter);
  app.use(interviewRouter);
}

module.exports = apiRouter