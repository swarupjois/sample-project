const express = require('express')
const app = express()
console.log("myprofile:", __dirname);
app.use('/myprofile',express.static("C:/Users/SRISAPURA/Documents/SampleProject1/sample-project-server/public/build"));
app.listen(8081);