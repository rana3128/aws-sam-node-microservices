const response = require("../../utils/rssponse");
const dbCartModel = require("../../db/models/cart.model");

exports.handler = async (eventObject, context, callback) => {
  const { id } = eventObject.pathParameters;
  const cart = await dbCartModel.getCartById([id]);
  return response._200(cart);
};
