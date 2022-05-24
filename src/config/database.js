require('dotenv').config();

module.exports = {
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
  },
};
/* module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  port: "3306",
  password: "",
  database: "datamychallenge",
  define: {
    timestamps: true,
    underscored: true,
  },
}; */
