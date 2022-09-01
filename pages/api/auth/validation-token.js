let connection = require("../../../config/db");
var md5 = require('md5');

export default async function handler(req, res) {
    let { token } = req.body;

    connection.query("SELECT * FROM user WHERE token = ?", [token], async (err, result) => {
        if (err) res.send({
            isRegistred: false,
            message: err.sqlMessage
        });
        else if (result.length == 0) res.send({
            isRegistred: false,
            message: 'You should sign-in again'
        });
        else if (result.length == 1) {
            res.send({
                isRegistred: true,
            });
        } else res.send({
            isRegistred: false,
            message: 'Problem with the server!, Try Later, thanks!',
        });
    })
}