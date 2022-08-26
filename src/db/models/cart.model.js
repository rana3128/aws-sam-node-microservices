const { executeQuery } = require("../config");
const queries = require("./queries/cartQueries");

exports.addToCart = async (data) => executeQuery(queries.addToCart, data);
exports.removeFromCart = async (data) => executeQuery(queries.removeFromCart, data);
exports.getCartById = async (data) => executeQuery(queries.getCartById, data);