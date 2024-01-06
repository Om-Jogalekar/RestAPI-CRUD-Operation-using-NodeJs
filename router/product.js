const express = require('express');
const router = express.Router();
const productcontroller = require('../controller/productcontroller');
const auth = require('../auth_middleware');


router.post('/newproduct',auth.authenticateUser,productcontroller.createProduct);
router.get('/allproducts',productcontroller.getAllProduct);
router.get('/productdetails/:productId',productcontroller.getProductDetails);
router.put('/updateproduct/:productId',auth.authenticateUser,productcontroller.updateProduct);
router.delete('/deleteproduct/:productId',auth.authenticateUser,productcontroller.deleteProduct);
module.exports = router;