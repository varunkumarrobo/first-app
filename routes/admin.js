const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    // console.log('In Another middleware!');
    // res.send('<html><body><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></body></html>');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;