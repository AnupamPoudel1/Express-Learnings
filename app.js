const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('User Accessed Home Page');
    res.status(200).send('Home Page');
})

app.get('/about', (req, res) => {
    console.log('User Accessed About Page');
    res.status(200).send('About Page');
})

app.all('*', (req,res) => {
    console.log(`User Accessed Page That Doesn't Exist`);
    res.status(404).send('404 Not Found');
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
}) 