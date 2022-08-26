const { executeQuery } = require("../config");
const queries = require("./queries/productQueries");

exports.getProductList = async (data) =>
  executeQuery(queries.getProdList, data);

exports.getProduct = async (data) =>
  executeQuery(queries.getProductById, data);

