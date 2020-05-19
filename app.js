var express = require('express')
var Mock = require('mockjs')

var app = express()

app.all('/', function (req, res) {
    res.json(Mock.mock({
        "data|12":[{
            "month|+1":1,
            "value|0-500":20
        }]
    }))
})

app.listen('8000')