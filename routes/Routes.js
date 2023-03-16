const express = require("express");
const fs = require("fs");
const router = express.Router();

// user get requset end point 
router.get('/', (req, res) => {
    res.send("hello joni / route heatd ")
})
router.get('/random', (req, res) => {
    fs.readFile("./output.json", 'utf8', (err, data) => {
        if (err) {
            console.error(err); 
        }
        else {
            const userId = Math.floor(Math.random() *1000)
            console.log(userId)
            res.send("number")
        }
    })
    
})
router.get('/all', (req, res) => {
    fs.readFile("./output.json", 'utf8', (err, data) => {
        if (err) {
            console.error(err); 
        }
        else {
            res.send(data);
        }
    })
})

// user post requst here ato add some user 

router.post('/save',(req ,res)=>{
    const userdata= (req.body);
    console.log(userdata)
    const newData=JSON.parse(fs.readFileSync("./output.json")
    )
    newData.push(userdata);
    fs.writeFileSync('./output.json',JSON.stringify(userdata));
     res.send('Data added successfully!');
}) 
// update a user data 

router.patch('/update/:id' ,(req ,res)=>{
    res.send("hello joni / route heatd ")
})
router.patch('/bulk-update' ,(req ,res)=>{
    res.send("hello joni / route heatd ")
})

// delete data from database 
router.delete('/:id' ,(req ,res)=>{
    res.send("hello joni / route heatd ")
})
module.exports = router;