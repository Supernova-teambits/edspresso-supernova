const Category = require("../models/Category");

const getCategory = (req, res) => {
    Category.find({}).exec()
    .then(results => {
        res.status(200).json(results);
    })
    .catch(error => {
        res.status(500).json(error);
    });
}

const saveCategory = (req, res) => {
    const newCategory = new Category(req.body);
    newCategory.save()
    .then(results => {
        res.status(201).json(results);
    })
    .catch(error => {
        res.status(500).json(error);
    });
}

const updateCategory = (req, res) => {
    Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(results => {
        res.status(201).json(results);
    })
    .catch(error => {
        res.status(500).json(error);
    }); 
}

const deleteCategory = (req, res) => {
    Category.findByIdAndDelete(req.params.id)
    .then(results => {
        if (results != null) {
            res.status(200).json("Delete completed");
        } else {
            res.status(404).json("Delete fail: Category not found");
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
}

module.exports = { getCategory, saveCategory, updateCategory, deleteCategory };