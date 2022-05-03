const Category = require("../model/Category")

module.exports = {
    async getAll() {
        console.info("Category: get all")
        return await Category.findAll();
    },

    async getOne(name) {
        console.info("Category: get one")
        return await Category.findOne({
            where: {
                name: name
            }
        })
    },

    async insert(name) {
        console.info("Category: insert one category")
        return await Category.create({name: name})
    },

    async delete(name) {
        console.info("Category: delete one category")
        return await Category.destroy({
            where: {
                name: name
            }
        })
    }
}