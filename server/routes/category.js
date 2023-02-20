const express = require("express");
const router = express.Router();

const categoryCtrl = require("../controllers/categoryController");

router.get("/category/", categoryCtrl.getCategory);

router.post("/category", categoryCtrl.saveCategory);

router.put("/category/:id", categoryCtrl.updateCategory);

router.delete("/category/:id", categoryCtrl.deleteCategory);

module.exports = router;