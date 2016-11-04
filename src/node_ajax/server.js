/**
 * Created by koko on 03.11.16.
 */

var express = require('express');
var cors = require('cors');
var body = require('body-parser');
var mysql = require('mysql');

var app  = express();
app.use(cors());

app.use(body.json());

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'java_script'

});


connection.query('create table if not exists user(id int primary key auto_increment, ' +
    'username varchar(50),' +
    'email varchar(100),' +
    'phone varchar(20),' +
    'password varchar(100))');
connection.query('create table if not exists commodity(id int primary key auto_increment, ' +
    'name varchar(150),' +
    'price double,' +
    'description text)');
connection.query('create table if not exists orders(id int primary key auto_increment, ' +
    'username varchar(50),' +
    'email varchar(100),' +
    'commodity_name varchar(100),' +
    'commodity_price double,' +
    'dateOfRecord VARCHAR(10))');

// DELIMITER $$
// create procedure save_order(in username varchar(50),
// in email varchar(100),
// in commodity_name varchar(100),
// in commodity_price double)
// begin
// insert into orders (username, email, commodity_name, commodity_price, dateOfRecord)
// values (username, email, commodity_name,commodity_price, CURRENT_TIME());
// end$$
// DELIMITER ;



app.post("/sign_in", function (req,resp) {
    // console.log("sign_in");// write in a comand line!!!

   connection.query('insert into user (username, email, password) values (?,?,?)'
       ,[req.body.username, req.body.email, req.body.password], function (err) {
           console.log(err);
   });

   resp.send(req.body.username+" was saved");
});

app.post("/saveOrder", function (req,resp) {
    connection.query("insert into commodity(name,price,description) values " +
        "(?,?,?)", [req.body.commodity_name, req.body.commodity_price, req.body.commodity_description], function () {

        var commodity= {
            name : req.body.commodity_name,
            price : req.body.commodity_price,
            description : req.body.commodity_description
        }

        resp.send(commodity);

    });
});



app.post("/loadCommodities", function (req,resp) {


    connection.query("select name, price, description from commodity", function (err, rows) {
        var arrayData = [];

        for (var i in rows) {
            var data = {
                name: rows[i].name,
                price: rows[i].price,
                description: rows[i].description
            }
            arrayData.push(data);
        }
        resp.send(arrayData);
    });
});


app.listen(3000, function (err) {
    console.log(err);
});