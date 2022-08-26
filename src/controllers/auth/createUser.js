const response = require("../../utils/rssponse");
const dbAuthModel = require("../../db/models/auth.model");
const crypto = require("crypto");

exports.handler = async (eventObject, context, callback) => {
  const payload = JSON.parse(eventObject.body);
  const hashPassword = crypto.pbkdf2Sync(payload.password, "salt", 2000, 64, "sha512");
  const AddQuery = await dbAuthModel.addUser([payload.email, hashPassword.toString("hex")]);
  return response._200(AddQuery);
};
