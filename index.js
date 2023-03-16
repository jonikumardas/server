const express = require("express")
const fs = require('fs');
const port=5000;
const app = express()
const userRouter=require('./routes/Routes')
const bodyParser = require("body-parser")
app.use('/user', userRouter)

// meadlewere 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req,res)=>{
    res.send('Hello World!')

})
app.listen(port, ()=>{
    console.log(`listeniing at port:${port}`)
}) 