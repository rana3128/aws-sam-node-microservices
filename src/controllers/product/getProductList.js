const response = require("../../utils/rssponse");
const dbProductModel = require("../../db/models/product.model");


exports.handler = async (eventObject, context, callback) => {
  const list = await dbProductModel.getProductList();

  return response._200(list);
};
