const { createPool, Pool } = require("mysql2");

console.log("process.env : ", process.env)

let mySqlConfig = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

let pool;

/**
 * generates pool connection to be used throughout the app
 */
const mysqlInit = () => {
  try {
    if (mySqlConfig) {
      pool = createPool({
        connectionLimit: 4,
        host: mySqlConfig.host,
        user: mySqlConfig.user,
        password: mySqlConfig.password,
        database: mySqlConfig.database,
      });
      console.debug("MySql Adapter Pool generated successfully", pool);
    } else {
      console.debug("MySql Configs error");
    }
  } catch (error) {
    console.error("[mysql.connector][init][Error]: ", error);
    throw new Error("failed to initialized pool");
  }
};

/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query
 */
const mysqlQuery = (query, params) => {
  try {
    if (!pool)
      throw new Error(
        "Pool was not created. Ensure pool is created when running the app."
      );

    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  } catch (error) {
    console.error("[mysql.connector][execute][Error]: ", error);
    Promise.resolve(error);
  }
};


const executeQuery = async (query, data) => {
  try {
    const queryRes = await mysqlQuery(query, data);
    console.log(queryRes);
    return queryRes;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  mysqlInit,
  mysqlQuery,
  executeQuery
}