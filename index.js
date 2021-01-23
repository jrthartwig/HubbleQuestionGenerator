const express = require('express')
const app = express()
const port = 3001;
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');


app.get('/', (req, res) => {
    let options = {
        1: {
            id: '1',
        },
        2: {
            id: '2'
        }
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    res.send(options[getRandomInt(3)])
})






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})