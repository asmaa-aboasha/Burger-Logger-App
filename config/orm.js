const connection = require("../config/connection.js")

const orm = {
    selectAll: (tableName, cb) => {
        connection.query("SELECT * from ??", [tableName], (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data);
            cb(data);
        });
    }
};

module.exports = orm;
