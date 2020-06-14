const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geoLocationDetails=require('./utils/geoLocationDetails')
const geoforecast=require('./utils/geoforecast')
const app = express()

console.log(path.join(__dirname, '../public'))
//console.log(__filename)
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')
app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)
app.get('', (req, res) => {
    res.render('index', { title: 'Check you weather by location .', name: 'Ashutosh' })
})
app.get('', (req, res) => {
    res.send('Hi ,Welcome to Express! ')
})

app.get('/help', (req, res) => {
    res.render('help', { title: 'Help page', name: 'Ashutosh' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'Hi ,This is all about Express!', name: 'Ashutosh' })
})

app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
        return res.send('Address is missing ,It must be provied !')
    }
    geoLocationDetails(req.query.address,(error,data)=>{
        if(error){
            return console.log('unable to find latitude and longitude.')
        }
        geoforecast(data,(error,forecastData)=>{
            if(error){
                return console.log('Unable to find the weather forecast')
            }
            // console.log(data)
            // console.log(forecastData)
            res.send( { location: data, forecast: forecastData ,address:req.query.address})
        })
           
        })
        
    
})
app.get('*', (req, res) => {
    
    res.render('404', { title: '404', errorMsg: 'Page not found', name: 'Ashutosh' })
})

app.listen(3000, () => {
    console.log('Server is Up now.')
})

