const express = require('express');
const app = express();
const logger = require('./middleware/logger');

// Invoking middleware
// Now this middleware will apply to every route after where we invoke it 
app.use(logger);

// If we do as follow
// app.use('/api', logger);
// Then this logger middleware will apply to every route that starts with /api 
// But this middleware wont apply to routes like /home, /about.

app.get('/', (req, res) => {
    res.status(200).send(`Home Page`);
})

app.get('/about', (req, res) => {
    res.status(200).send(`About Page`);
})

app.get('/api/v1/products', (req, res) => {
    res.status(200).send(`Products`);
})

app.listen(5000, () => {
    console.log('Server is running on port 5000.....');
});
