const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')
const { OperationHelper } = require('apac');
//const amazon =require ('amazon-product-api')  //requireing amazon api library.
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const opHelper = new OperationHelper({
    awsId: '[AKIAJE3K4IVF6OV4VKPQ]',
    awsSecret: '[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]',
    assocId: '[2018030a-20]',
    locale: 'CA',
    maxRequestsPerSecond: 1,
});
console.log(opHelper)

opHelper.execute('ItemSearch', {
    'SearchIndex': 'Books',
    'Keywords': 'harry potter',
    'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
    console.log("Results object: ", response.result);
    console.log("Raw response body: ", response.responseBody);
}).catch((err) => {
    console.error("Something went wrong! ", err);
});



app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})