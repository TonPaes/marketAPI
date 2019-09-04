const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
// const errorRoutes = require('./error');

// Midleware 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(express.json());                  //using the express framework to deal with json data
//app.use(express.urlencoded({ extended:false }));


app.use((res,req, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if( req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE" );
        return res.status(200).json({}).send();
    }
});
app.use('/products', productRoutes);
app.use('/orders',  orderRoutes);

app.use((req, res, next) => {
    const error = new Error('NOT FOUND!!!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message : error.message
        }
    });
});


module.exports = app;

