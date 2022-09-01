let connection = require("../../../config/db");
var md5 = require('md5');

export default async function handler(req, res) {
    let {email,password,role} = req.body;
    password = md5(password);
    await connection.query("INSERT INTO user value(null,?,?,?,null)",[email,password,role],(err,result)=>{
        if(err) res.send({
            isRegistred : false,
            message: err.sqlMessage
        });
        else res.send({
            isRegistred : true,
        });
    })
}