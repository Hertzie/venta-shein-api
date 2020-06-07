const pool = require('../config/database');

exports.getCategorias = (req,res) =>{
    req.send(pool);
}