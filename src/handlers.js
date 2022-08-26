const dbConfig = require("./db/config");
dbConfig.mysqlInit();


module.exports = {
    getProductList : require("./controllers/product/getProductList").handler,
    getProduct : require("./controllers/product/getProduct").handler,
    addToCart: require("./controllers/cart/addToCart").handler,
    removeFromCart: require("./controllers/cart/removeFromCart").handler,
    getCart: require("./controllers/cart/getCartById").handler,

    createUser: require("./controllers/auth/createUser").handler,
    loginUser: require("./controllers/auth/loginUser").handler,
    validateUser: require("./controllers/auth/validateToken").handler,
}