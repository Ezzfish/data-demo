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

app.get('/Layout', function (req, res) {
    res.json(
        Mock.mock({
            'number|1-99': 1
        })
    )
})
app.get('/Block1/visitChart', function (req, res) {
    res.json(
        Mock.mock({
            "data|12": [{
                "month|+1": 1,
                "temperature|1-30": 1
            }]
        })
    )
})
app.get('/Block1/payChart', function (req, res) {
    res.json(
        Mock.mock({
            "data|8": [{
                "year|+1": 1,
                "sales|1-100": 1
            }]
        })
    )
})
app.get('/Block1/populationChart', function (req, res) {
    res.json(
        Mock.mock({
            "data|1-1": [{
                "population|1-100": 1,
            }]
        })
    )
})
app.get('/Block1', function (req, res) {
    res.json(
        Mock.mock({
            'week|1-99': 1,
            'day|1-99': 1,
            'daySale|10000-20000': 10000,
            'allSale|100000-1000000': 100000,
            'visit|1-100000': 1,
            'dayVisit|1-10000': 1,
            'pay|1-10000': 1,
            'conversion|1-100': 1,
            'population|1-100': 1,
        })
    )
})
app.get('/BlockTwoChart', function (req, res) {
    res.json(
        Mock.mock({
            "data|12": [{
                "month|+1": 1,
                "value|0-200": 20
            }]
        })
    )
})
app.get('/BlockTwoItem', function (req, res) {
    res.json(
        Mock.mock({
            "data|1-1": [{
                "population|1-100": 1,
            }]
        })
    )
})
app.get('/BlockThreeChart', function (req, res) {
    res.json(
        Mock.mock({
            'search|1-10000': 1,
            'searchRate|1-99': 1,
            'searchPerson|1-10.1': 1,
            'searchPersonRate|1-99': 1,
        })
    )
})
app.get('/BlockThreeTable', function (req, res) {
    res.json(
        Mock.mock({
            "data|8": [{
                "key|+1": 1,
                "name|1":'@FIRST @LAST',
                "searchKeywords|1-100": 1,
                "users|1-100": 1,
                "weeklyIncrease|1-100": 1
            }]
        })
    )
})

app.get('/BlockThreeChartTwo', function (req, res) {
    var name = ['家用电器', '食用酒水', '个户健康', '服饰箱包', '母婴用品', '其他']
    res.json(
        Mock.mock({
            "data|3-6": [{
                'name|1':name,
                "value|1-100": 1,
            }],
            "value|10000-100000":1
        })
    )
})
app.get('/BlockFour', function (req, res) {
    res.json(
        Mock.mock({
            "array|8-8": [
                {
                    "number|1-100": 1
                }
            ]
        }).array.map(obj => obj.number)
    )
})
app.get('/BlockFourContent', function (req, res) {
    res.json(
        Mock.mock({
            "array|19-19": [
                {
                    name:'passenge',
                    'time|+1':1,
                    "value|1-119": 1
                }
            ],
            "arraypayment|19-19": [
                {
                    name: 'payment',
                    'time|+1': 1,
                    "value|1-119": 1
                }
            ]
        })
    )
})

var server = app.listen('8000')