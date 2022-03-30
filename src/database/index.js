const Sequelize = require("sequelize")
const dbConfig = require("../config/database")
const Category = require("../model/Category")
const Device = require("../model/Device")

const connection = new Sequelize(dbConfig)


Device.init(connection)
Category.init(connection)

Category.associate(connection.models)
Device.associate(connection.models)

module.exports = connection;