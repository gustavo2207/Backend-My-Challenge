const categoryService = require("../services/CategoryService");

module.exports = {
  async index(req, res) {
    console.clear();
    console.info("Category: the index was called");

    const category = await categoryService.getAll();
    return res.json(category);
  },

  async store(req, res) {
    console.clear();
    console.info("Category: the insert category was called");

    const { name } = req.body;

    if (!name) return res.status(400).json({ error: "Category not insert" });

    const isExist = await categoryService.getOne(name);

    if (isExist)
      return res.status(409).json({ error: "Category already exists" });

    const category = await categoryService.insert(name);

    return res.json(category);
  },

  async delete(req, res) {
    console.clear();
    console.info("Category: the delete category was called");

    const { categoryName } = req.params;

    const category = await categoryService.getOne(categoryName);

    if (!category)
      return res.status(400).json({
        error: "The category do not exists",
      });

    await categoryService.delete(categoryName);

    return res.status(200).json({ message: "Category removed" });
  },
};
