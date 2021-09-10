const express = require('express');
const app = express();

const users = [];

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.get('/users',(req, res) => {
    res.send(users)
})

app.post('/users', (req, res) =>{
    res.status(200).send(users[0]);
    users.push({id:0});
})

app.listen(3000,function(){
    console.log("server is running");
    
})

