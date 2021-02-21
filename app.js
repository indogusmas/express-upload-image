const express = require('express')
const app = express()
const port = 3000;

const upload = require('./route/upload');

require('dotenv').config();

app.use(express.static('public'));
app.use('/upload',express.static('upload'));

app.get('/',(req,res) => {
    res.send('Hello world')
})
app.use('/upload',upload);




app.listen(port,()=>{
    console.log(`app runnging on ${port}`)
})