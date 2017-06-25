"use strict";

const express = require('express')
const app = express()

app.use('/', require('./controllers'))

app.listen(5001, function () {
  console.log('Example app listening on port 5001!')
})