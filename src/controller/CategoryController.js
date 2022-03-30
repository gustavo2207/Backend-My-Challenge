const Category = require("../model/Category")

module.exports = {
    async index(req, res){
        const category = await Category.findAll();
        return res.json(category)
    },

    async store(req, res){
        const {name} = req.body;

        const isExist = await Category.findOne({
            where: {
                name: name
            }
        })
        
        if(!name) return res.status(400).json({error: "Category not insert"});

        if(isExist) return res.status(409).json({error: "Category already exists"})

        console.log(name)
        
        const category = await Category.create({name: name});

        return res.json(category)
    },

    async delete(req, res) {
        const {categoryName} = req.params;

        const category = await Category.findOne({
            where: {
                name: categoryName
            }
        })

        if(!category) return res.status(400).json({
            error: "The category do not exists"
        })

        await Category.destroy({
            where: {
                name: categoryName
            }
        })
        return res.status(200).json({message: "Category removed"})
    }
}