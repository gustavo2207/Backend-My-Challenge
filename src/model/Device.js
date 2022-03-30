const {Model, DataTypes} = require("sequelize");

class Device extends Model {
    static init(sequelize){
        super.init({
            color: DataTypes.STRING,
            part_number: DataTypes.INTEGER,
            id_category: DataTypes.INTEGER
        }, {sequelize})
    }

    static associate(models) {
        this.belongsTo(models.Category, { foreignKey: "id_category", as: "category" })
    }
}


module.exports = Device;