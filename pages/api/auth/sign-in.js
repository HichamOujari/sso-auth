let connection = require("../../../config/db");
var md5 = require('md5');

export default async function handler(req, res) {
    let { email, password } = req.body;
    password = md5(password);
    connection.query("SELECT * FROM user WHERE email = ? and password = ?", [email, password], async (err, result) => {
        if (err) res.send({
            isRegistred: false,
            message: err.sqlMessage
        });
        else if (result.length == 0) res.send({
            isRegistred: false,
            message: 'User with this informations is not found'
        });
        else if (result.length == 1) {
            const d = new Date()
            const id = result[0].id
            let token = md5(d.getTime() + '-' + id)
            await connection.query("update user set token=? WHERE id = ? ", [token, id])
            res.send({
                isRegistred: true,
                token: token,
                user: result[0].email.split('@')[0],
                role: result[0].role,
            });
        } else res.send({
            isRegistred: false,
            message: 'Problem with the server!, Try Later, thanks!',
        });
    })
}