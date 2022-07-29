var express = require('express');
var router = express.Router();
var ProductListing = require('../models/productlisting')

/* GET productlistings listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/addproduct', async(req, res) => {
    try {
        let productlisting = await new ProductListing(req.body).save();
        res.json({ message: "Product Added Successfully", data: productlisting, success: true })
    } catch (err) {
        res.json({ message: err.message, success: false })
    }
});

router.get('/getproduct', async(req, res) => {
    try {
        const getproductlisting = await ProductListing.find().exec();
        res.json({ message: 'Product Details', data: getproductlisting, success: true });
    } catch (err) {
        res.json({ message: err.message, success: false })

    }
});

router.post('/updateproduct', async(req, res) => {
    try {
        let productlisting = await ProductListing.findByIdAndUpdate(req.body.id, { productname: req.body.productname, description: req.body.description, companyname: req.body.companyname, 
        quantity: req.body.quantity, 
        price: req.body.price }).exec();
        res.json({ message: "Product Successfully Updated", data: productlisting, success: true });
    } catch (err) {
        res.json({ message: err.message, success: false })

    }
});

router.post('/deleteproduct', async(req, res) => {
    try {
        await ProductListing.findByIdAndRemove(req.body.id).exec();
        res.json({ message: "Successfully Deleted", success: true });
    } catch (err) {
        res.json({ message: err.message, success: false })

    }
});
module.exports = router;