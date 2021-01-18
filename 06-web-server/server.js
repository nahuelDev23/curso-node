const express = require('express')
const app = express()

const hbs = require('hbs')
require('./hbs/helpers')
const port = process.env.PORT || 3000
    /**
     * para entrar a home en la url tenes q poner home.html
     */
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static(__dirname + '/public'))

/**
 * express HBS
 */
app.set('view engine', 'hbs')

/**
 * 
 * esto funciona con extress nativo
 */
app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'nahuel',
        section: 'Home'
    })
})

app.get('/nosotros', function(req, res) {
    res.render('nosotros', {
        nombre: 'nahuel',
        section: 'Nosotros'
    })
})

app.listen(port, () => {
    console.log(`escuchando puerto ${port}`)
})