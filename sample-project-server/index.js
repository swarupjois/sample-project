const express = require('express')
const app = express()
app.use('/myprofile',express.static(__dirname + "/public/build"));
app.listen(8081);