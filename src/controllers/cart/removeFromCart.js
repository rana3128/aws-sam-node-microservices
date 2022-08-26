const response = require("../../utils/rssponse");
const dbCartModel = require("../../db/models/cart.model");

exports.handler = async (eventObject, context, callback) => {
  console.log("Event body : ", eventObject.body);

  const payload = JSON.parse(eventObject.body);
  const RemoveFromCart = await dbCartModel.removeFromCart([payload.product_id, payload.cart_id ]);
  return response._200(RemoveFromCart);
};
