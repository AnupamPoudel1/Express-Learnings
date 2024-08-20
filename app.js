const express = require('express');

const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
});

app.get('/api/products', (req, res) => {

    const newProducts = products.map((product) => {
        const { id, productName, price } = product;
        return { id, productName, price };
    })

    res.json(newProducts);
})

app.get('/api/products/1', (req, res) => {

    const singleproduct = products.find((product) => product.id === 1);

    res.json(singleproduct);
})

app.listen(5000, () => {
    console.log('Server is running on port 5000.....');
});
