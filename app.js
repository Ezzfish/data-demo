var express=require('express')
var Mock=require('mockjs')

var app=express()

app.all('/test.action',function(req,res){
    res.send('hello World')
})

app.listen('8000')