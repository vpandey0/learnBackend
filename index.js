console.log('chai or codenpm ');
require('dotenv').config()
const express = require('express')
const app = express()

//const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res)=>{
    res.send('kopingskills')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Login at Koping skills</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('Chai aur code')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})