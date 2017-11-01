var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'fenye'
})

/* GET home page. */
router.post('/list', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*');
	var inp=req.body.inp;
	con.query(`SELECT * FROM yingyu WHERE xw LIKE '%${inp}%'`,function(err,rows){
		res.send(rows);
	})
});

module.exports = router;