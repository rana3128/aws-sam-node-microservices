const response = require("../../utils/rssponse");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.handler = async (event, context, callback) => {
  console.log(event.authorizationToken);
  const token = event.authorizationToken
  const methodArn = event.methodArn;

  try {
    console.log("Decodeding token ");
    const decoded = jwt.verify(token, "secret");
    console.log("Decoded token ", decoded);
    if (decoded) {
      return generateAuthResponse("user", "Allow", methodArn);
    } else {
      return generateAuthResponse("user", "Deny", methodArn);
    }
  } catch (err) {
    return generateAuthResponse("user", "Deny", methodArn);
  }
};

function generateAuthResponse(principalId, effect, methodArn) {
  const policyDocument = generatePolicyDocument(effect, methodArn);
  return {
    principalId,
    policyDocument,
  };
}

function generatePolicyDocument(effect, methodArn) {
  if (!effect || !methodArn) return null;
  const policyDocument = {
    Version: "2012-10-17",
    Statement: [
      {
        Action: "execute-api:Invoke",
        Effect: effect,
        Resource: methodArn,
      },
    ],
  };
  return policyDocument;
}
