'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('devices', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false
      },
      part_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      id_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete:"CASCADE"
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("devices")
  }
};
