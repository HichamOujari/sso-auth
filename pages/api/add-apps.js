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
    await connection.query("INSERT INTO applications value(null,?)",[hostname],(err,result)=>{
        if(err) res.send({
            isAdd : false,
            message: err.sqlMessages
        });
        else res.send({
            isAdd : true,
        });
    })
}