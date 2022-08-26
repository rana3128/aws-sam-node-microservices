const response = require("../../utils/rssponse");
const dbCartModel = require("../../db/models/cart.model");

exports.handler = async (eventObject, context, callback) => {
  console.log("Event body : ", eventObject.body);

  const payload = JSON.parse(eventObject.body);
  const InsertToCart = await dbCartModel.addToCart([payload.cart_id, payload.product_id, payload.quantity ]);
  return response._200(InsertToCart);
};
