const express = require('express');
const morgan = require('morgan');

// custom imports
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');

// main express app
const app = express();

app.use(morgan('tiny'));


// Invoking middleware
// Now this middleware will apply to every route after where we invoke it 
// app.use([logger, authorize]);

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

app.get('/api/v1/products', authorize, (req, res) => {
    console.log(req.user);
    res.status(200).send(`Products`);
})

app.listen(5000, () => {
    console.log('Server is running on port 5000.....');
});
