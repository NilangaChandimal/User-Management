const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller')

//middleware
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//api
app.get('/users', (req, res) => {
    controller.getUsers(users => {
        res.send(users);
    });
});

app.get('/user', (req, res) => {
    const id = req.query.id;
    controller.getUserById(id,users => {
        res.send(users);
    });
});

module.exports = app; 