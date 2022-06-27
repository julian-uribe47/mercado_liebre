const express = require('express');
const path = require('path')
const app = express();
app.use(express.static('public'));


app.listen(3030, ()=> console.log('ejecutando servidor'));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))
});
app.get('/crearCuenta', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/crearCuenta.html'))
});
app.get('/ingresar', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/ingresar.html'))
});