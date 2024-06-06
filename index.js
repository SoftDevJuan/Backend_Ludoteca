
const express = require('express');
const app = express();
const port = 4000;
const routes = require('./routes/routes.js');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res) => {
    res.send("host en linea, Hola Edmundo como tas ? todo bien ? de incapacidad o que ? xD");
});

app.use('/', routes);

app.listen(port,()=>{
    console.log(`Server Trabajando en el puerto ${port}`);
});