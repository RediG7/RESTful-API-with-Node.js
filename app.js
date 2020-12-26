const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const userRoutes = require('./api/routes/user');

mongoose.connect("mongodb+srv://redi:"+process.env.MONGO_DB_ATLAS+"@testcluster1.hvjuc.mongodb.net/shopDB?retryWrites=true&w=majority", {useNewUrlParser: true,  useUnifiedTopology: true});
mongoose.Promise = global.Promise;

app.use(morgan('dev')); // HTTP request logger middleware for node.js
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// adding before any response happens, second param is to give access (*) in this case to all clients
app.use((req, res, next) => {
    res.header("Access-Conntrol-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    // browser always sends a OPTIONS request first before making the post or put req 
    // browser sees if it is allowed to make the req
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        res.status(200).json({});
    }
    next();
});

// middleware, routes which should handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;