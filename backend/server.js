const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')
// const { OperationHelper } = require('apac');
const amazon =require ('amazon-product-api')  //requireing amazon api library.
const router = express.Router()
//const util = require('util')
var parseString = require('xml2js').parseString;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var client = amazon.createClient({
    awsId: "AKIAJE3K4IVF6OV4VKPQ",
    awsSecret: "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",
    awsTag: "2018030a-20",
    locale: 'CA',
});


//FEATURED ITEMS 

client.itemSearch({
    searchIndex: 'Grocery',
    responseGroup: 'ItemAttributes,Images',
    keywords:'fair trade, eco',
    sort:'salesrank',
    domain: 'webservices.amazon.ca'
}).then(function (results) {
    console.log(results);
}).catch(function (err) {
    console.log(err);
});


app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})