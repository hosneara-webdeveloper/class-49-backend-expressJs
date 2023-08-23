const express = require("express");
const app = express();
const port = 5000;
const products = require('./product.json')

app.get('/', (req, res) => {
    res.send('our backend server is ready for web ')
})

app.get('/product', (req, res) => {
    res.send(products)
})

app.get('/product/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);
    const product = products.find(product => product.id === id);
    res.send(product)
})

app.listen(port, () => {
    console.log(`Our server is on port: ${port}`);
})
