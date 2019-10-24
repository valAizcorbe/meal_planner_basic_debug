require ('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Server running on Port: ${SERVER_PORT}`))
})

// ENDPOINTS

app.get('/api/meals/:category', ctrl.getMealsByCategory)
app.post('/api/meals', ctrl.addMeal)
app.put('/api/meals/:id', ctrl.editMeal)
app.delete('/api/meals/:id/:category', ctrl.deleteMeal)