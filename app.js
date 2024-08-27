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

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));

    if (!singleProduct) {
        res.status(404).send('Product Does Not Exist');
    }

    res.json(singleProduct);
})

app.get('/api/v1/products/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.productName.startsWith(search)
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if(sortedProducts.length < 1){
        // res.status(200).send('No Products That Match Your Search');
        return res.status(200).json({
            success: true,
            data: []
        });
    }
    res.status(200).json(sortedProducts);
})

app.listen(5000, () => {
    console.log('Server is running on port 5000.....');
});
