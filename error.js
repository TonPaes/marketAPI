const express = require('express');
const router = express.Router();

router.get((req, res, next) =>{
    const error = new Error('not found');
    error.status(404);
    next(error);
});

router.get((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message : 'tottaly up to you'
        }
    });
});


module.exports = router;