var path = require('path')
var express = require('express')
var mockjs = require('express-mockjs')

var app = express()

// 使用默认路径（不推荐） /
// app.use(mockjs(path.join(__dirname, 'mocks')))

// 自定义路径 /api
app.use('/api', mockjs(path.join(__dirname, '../../mock')))

// 这里可以添加你的自定义代码.

app.listen(9999);