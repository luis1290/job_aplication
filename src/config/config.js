require("dotenv").config();
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "port":process.env.DB_PORT,
    "password": process.env.DB_PASSWORD,
    "database":  process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

//npx sequelize-cli model:generate --name interviews --attributes date_interview:date,confir_interview:boolean,time_interview:time
