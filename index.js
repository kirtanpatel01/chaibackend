require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 4001;

app.get('/', (req, res) => {
    return res.send('Hello World!'); 
});

app.get('/twitter', (req, res) => {
    return res.send(`<h1>You're in twitter page</h1>`);
})

app.get('/login', (req, res) => {
    return res.send('<h1>Please login to enter this page!</h1>')
})

app.get('/youtube', (req, res) => {
    return res.send(`<h1>Kiton</h1>`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})