//import category model here

const addCategory = (req, res) => {
    category.addCategory(req.body)
    .then(book => res.status(201).send(book))
};

const getAllCategory = (req, res) => {
    //get category api logic here
};


const CategoryController = {
    addCategory,
    getAllCategory
};

module.exports = CategoryController;