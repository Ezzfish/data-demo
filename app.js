var express = require('express')
var Mock = require('mockjs')

var app = express()

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})  

app.all('/', function (req, res) {
    res.json(
        123
        
        /*
        Mock.mock({
        "data|12":[{
            "month|+1":1,
            "value|0-500":20
            }]
        })
        */
    
    )
})




var server= app.listen('8000')