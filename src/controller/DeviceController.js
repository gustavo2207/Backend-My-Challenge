const categoryService = require("../services/CategoryService")
const deviceService = require("../services/DeviceService")

module.exports = {
    async index(req, res){
        console.clear()
        console.info("Device: the index was called");

        const device = await deviceService.getAll()

        return res.json(device);
    },

    async store(req, res) {
        console.clear()
        console.info("Device: the insert Device was called");

        const { category_name } = req.params;
        const { color, part_number } = req.body;

        const isExist = await deviceService.getOne(part_number);

        if(isExist) return res.status(409).json({error: "part number already exists"})

        let category = await categoryService.getOne(category_name);

        if(!category) return res.status(400).json({error: 'Category no exists'})


        const device = await deviceService.insert(color, part_number, category.id)

        return res.json(device);
    },

    async delete(req, res) {
        console.clear()
        console.info("Device: the delete device was called");
        
        const {partNumber} = req.params;

        const device = await deviceService.getOne(partNumber)

        if(!device) return res.status(404).json({
            error: `No one devices has this part number: ${partNumber}`
        })

        await deviceService.delete(partNumber)

        return res.status(200).json({message: "Device removed"})
    }
}