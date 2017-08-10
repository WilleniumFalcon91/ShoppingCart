require('dotenv').config()

var db = require('db')
db.connect({
    host: process.env.DB_HOST, 
    username: process.env.DB_USER,
});