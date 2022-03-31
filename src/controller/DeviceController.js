const Device = require("../model/Device")
const Category = require("../model/Category")

module.exports = {
    async index(req, res){

        const device = await Device.findAll({
            include: {
                association:"category",
                attributes: ["name"]
            }
        })

        return res.json(device);
    },

    async store(req, res) {
        const { category_name } = req.params;
        const { color, partNumber } = req.body;

        const isExist = await Device.findOne({
            where: {
                part_number: partNumber
            }
        });

        if(isExist) return res.status(409).json({error: "part number already exists"})

        let category = await Category.findOne({where: {name: `${category_name}`}});

        
        console.log(color, partNumber)

        if(!category) return res.status(400).json({error: 'Category no exists'})


        const device = await Device.create({
            color: color,
            part_number: partNumber,
            id_category: category.id
        })
        return res.json(device);
    },

    async delete(req, res) {
        const {partNumber} = req.params;

        const device = await Device.findOne({
            where: {
                part_number: partNumber
            }
        });

        if(!device) return res.status(404).json({
            error: `No one devices has this part number: ${partNumber}`
        })

        await Device.destroy({
            where: {
                part_number: partNumber
            }
        });

        return res.status(200).json({message: "Device removed"})
    }
}