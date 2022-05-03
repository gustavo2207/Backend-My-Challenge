const Device = require("../model/Device")

module.exports = {
    async getAll(){
        console.info("Device: get all")
        return await Device.findAll({
            include: {
                association:"category",
                attributes: ["name"]
            }
        })
    },
    
    async getOne(id) {
        console.info("Device: get one")
        return await Device.findOne({
            where: {
                part_number: id
            }
        })
    },

    async insert(color, part_number, categoryId) {
        console.info("Device: insert one device")
        return await Device.create({
            color: color,
            part_number: part_number,
            id_category: categoryId
        })
    },

    async delete(id){
        console.info("Device: delete one device")
        return await Device.destroy({
            where: {
                part_number: id
            }
        })
    }
}