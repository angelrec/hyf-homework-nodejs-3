const express = require('express');
const app = express();

const user = [];

app.get('/',(req, res) => {
    res.send('hello world')
})

app.listen(3000,function(){
    console.log("server is running");
    
})

