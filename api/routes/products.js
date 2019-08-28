const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendStatus(418);
});

router.post('/', (req, res, next)=> {
    res.status(201).json({
        message : 'Handling post request from products.js'
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
    res.status(200).json({
        message : 'Product updated'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message : 'Product deleted'
    });
});


module.exports = router;
