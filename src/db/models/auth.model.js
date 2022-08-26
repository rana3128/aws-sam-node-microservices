const { executeQuery } = require("../config");
const queries = require("./queries/authQueries");

exports.addUser = async (data) => executeQuery(queries.addUser, data);
exports.removeUser = async (data) => executeQuery(queries.removeUser, data);
exports.getUser = async (data) => executeQuery(queries.getUser, data);
