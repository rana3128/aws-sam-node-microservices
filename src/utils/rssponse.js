module.exports = {
  _200: (body) => {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      isBase64Encoded: false,
      body: JSON.stringify(body),
    };
  },
  other: (code, mmessage) => {
    return {
      statusCode: code,
      headers: {
        "Content-Type": "application/json",
      },
      isBase64Encoded: false,
      body: JSON.stringify({ mmessage }),
    };
  },
};
