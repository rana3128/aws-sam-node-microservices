const response = require("../../utils/rssponse");
const dbProductModel = require("../../db/models/product.model");

exports.handler = async (eventObject, context, callback) => {
  console.log("Event pathParameters : ", eventObject.pathParameters);
  const { id } = eventObject.pathParameters;
  const list = await dbProductModel.getProduct(id);
  return response._200(list);
};
