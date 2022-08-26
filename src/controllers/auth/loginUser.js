const response = require("../../utils/rssponse");
const dbAuthModel = require("../../db/models/auth.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.handler = async (eventObject, context, callback) => {
  console.log(JSON.stringify(eventObject));
  const payload = JSON.parse(eventObject.body);
  const user = await dbAuthModel.getUser([payload.email]);
  let hashPassword = crypto.pbkdf2Sync(payload.password, "salt", 2000, 64, "sha512");
  hashPassword = hashPassword.toString("hex");
  console.log(hashPassword);
  console.log(user[0].password);
  if (user[0].password == hashPassword) {
    const token = jwt.sign({ email: payload.email }, "secret", { expiresIn: "1d" });
    if (token) {
      return response._200({ token });
    } else {
      return response.other(500, { msg: "Fail to login" });
    }
  } else {
    return response.other(403, { msg: "Unauthrised" });
  }
};
