let connection = require("../../config/db");
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    let {hostname} = req.body;
    if(hostname) await connection.query("SELECT * FROM applications where hostname like ?", ['%'+hostname+'%'], async (err, result) => {
        if (err) res.send({
            isRegistred: false,
            message: err.sqlMessage
        });
        res.send(result);
    })
    else await connection.query("SELECT * FROM applications", [], async (err, result) => {
        if (err) res.send({
            isRegistred: false,
            message: err.sqlMessage
        });
        res.send(result);
    })
}