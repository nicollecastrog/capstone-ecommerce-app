const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')
const amazon = require('amazon-product-api')  //requireing amazon api library.
const router = express.Router()


app.use((req, res, next) => {  // CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var client = amazon.createClient({
    awsId: "AKIAJE3K4IVF6OV4VKPQ",
    awsSecret: "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",
    awsTag: "2018030a-20",
    locale: 'CA',
});


//FEATURED ITEMS 

app.get('/featuredData', (req, res) => {
    // req.query.searchIndex
    client.itemSearch({
        searchIndex: 'Grocery',
        responseGroup: 'ItemAttributes,Images,OfferListings,Reviews, Large',
        keywords: 'fair trade, eco',
        sort: 'salesrank',
        IncludeReviewSummary: true,
        domain: 'webservices.amazon.ca'
    }).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
    });
})



//Display by Category

app.get('/products/:category', (req, res) => {
    const category = req.params.category
    let result = []

    switch (category) {
        case 'baby':
            result =
                client.itemSearch({
                    searchIndex: 'Baby',
                    responseGroup: 'ItemAttributes,Images,OfferListings,Reviews',
                    keywords: 'fair trade, eco',
                    sort: 'salesrank',
                    IncludeReviewSummary: true,
                    domain: 'webservices.amazon.ca'
                }).then(function (results) {
                    res.json(results);
                }).catch(function (err) {
                    console.log(err);
                });
            break
        case 'beauty':
            result =
                client.itemSearch({
                    searchIndex: 'Beauty',
                    responseGroup: 'ItemAttributes,Images,OfferListings,Reviews',
                    keywords: 'fair trade, eco',
                    sort: 'salesrank',
                    IncludeReviewSummary: true,
                    domain: 'webservices.amazon.ca'
                }).then(function (results) {
                    res.json(results);
                }).catch(function (err) {
                    console.log(err);
                });
            break
        case 'health':
            result =
                client.itemSearch({
                    searchIndex: 'HealthPersonalCare',
                    responseGroup: 'ItemAttributes,Images,OfferListings,Reviews',
                    keywords: 'fair trade, eco',
                    sort: 'salesrank',
                    IncludeReviewSummary: true,
                    domain: 'webservices.amazon.ca'
                }).then(function (results) {
                    res.json(results);
                }).catch(function (err) {
                    console.log(err);
                });
    }
})








app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})