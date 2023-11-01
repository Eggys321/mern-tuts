const express = require('express');
const { insert_Many, delete_Many, create_Product, delete_Product, update_Product, single_Product, all_Products, get_product_category, search_Products } = require('../controller/productController.js');
const router = express.Router();

// create products route
router.post('/create/many',insert_Many);
router.post('/create/product',create_Product);
router.delete('/delete/many',delete_Many);
router.delete('/delete/:productId',delete_Product);
router.patch('/update/:productId',update_Product);
router.get('/single/:productId',single_Product);
router.get('/all/products',all_Products);
router.get('/category/:productCategary',get_product_category);
router.get('/search/product', search_Products)


module.exports = router