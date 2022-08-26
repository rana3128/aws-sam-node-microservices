const response = require("../../utils/rssponse");

exports.handler = async (eventObject, context, callback) => {
  console.log(eventObject.body);
  return response._200({ msg: "added product successfully" });
};
