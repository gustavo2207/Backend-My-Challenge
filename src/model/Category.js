const {Model, DataTypes} = require("sequelize");

class Category extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Device, {
            foreignKey: 'id_category', 
            as: "devices"
        })
    }
}

module.exports = Category;