const {Product, Sequelize} = require ("../models")

const getAllProducts = async() => {
    return await Product.findAll();
};

const productRepo = {
    getAllProducts,
};

module.exports = productRepo;