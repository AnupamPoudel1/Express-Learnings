const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.all('*', (req,res) => {
    console.log(`User Accessed Page That Doesn't Exist`);
    res.status(404).send('404 Not Found');
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
}) 