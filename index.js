const express = require('express')
require('dotenv').config()
const app = express()

const port = 4000  // when the user wants to change their port so we use .env files and import it


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twetter',(req , res) =>{
    res.send("babu lal seervi")
})

app.get('/login',(req, res) =>{
    res.send('<h1> hey this is log in </h1>')
})

app.get('/youtube' ,(req ,res)=>{
    res.send("<h1> this is you tube </h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 