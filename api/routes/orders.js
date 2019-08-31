const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    
    res.status(200).json({
        message : 'Order fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId : req.body.product,
        quantity : req.body.quantity
    };
    res.status(201).json({
        message : 'Order was created',
        OrderCreated : order 
    });
});



router.get('/:orderId', (req, res, next) =>{
    const id = req.params.orderId;
    res.status(200).json({
        message : 'Order with the id ' + id + ' Was created' 
    });
});

module.exports = router;

