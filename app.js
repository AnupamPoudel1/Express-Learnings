const express = require('express');
const app = express();

// Middleware Learnings
// req => middleware => res

// simple middleware example
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

app.get('/', logger, (req, res) => {
    res.status(200).send(`Home Page`);
})

app.get('/about', logger, (req, res) => {
    res.status(200).send(`About Page`);
})

app.listen(5000, () => {
    console.log('Server is running on port 5000.....');
});
