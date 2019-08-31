const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendStatus(200);
});

router.post('/', (req, res, next)=> {
    const product = {
        name : req.body.name,
        price : req.body.price
    };
    res.status(201).json({
        message : 'Handling post request from products.js',
        product : product
    });
});


router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special')
        res.status(200).json({
            message : 'You requested a special product'
        });

    else {
        res.status(200).json({
            message : 'You requested the ' + id + ' product'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message : 'Product ' + id + ' updated'
    });
});

router.delete('/:productId', (req, res, next) => {
    id = req.param.productId;
    res.status(200).json({
        message : 'Product ' + productId + 'deleted.'
    });
});


module.exports = router;
