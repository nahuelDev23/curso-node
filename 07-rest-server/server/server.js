require('./config/config')
const express = require('express')
const app = express()
    /**
     * convierte datos del form a json
     */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json('hola mundo')
})
app.get('/usuario', function(req, res) {
    res.json('get usuario')
})
app.post('/usuario', function(req, res) {
    let persona = req.body; //body es generico para recibir el request con los datos

    if (req.body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario',
        });
    } else {
        res.json({
            persona
        })
    }

})

app.put('/usuario/:elid', function(req, res) {
    let id = req.params.elid;
    res.json({
        id,
    })
})
app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
})

app.listen(process.env.PORT, () => {
    console.log(`escuchando puerto ${process.env.PORT}`)
})