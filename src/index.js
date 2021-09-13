const express = require('express');
const app = express();

const users = [];

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.get('/users',(req, res) => {
    res.send(users)
})

app.post('/user',(req, res) =>{
    res.status(200).send(users[0]);
    users.push({ id: 0 });
})

app.get('/user/:id', (req, res) =>{
    res.send({ id: 0 });
});

app.delete('/user/:id', (req,res) =>{
    user[0] ? res.status(200).send(users) : res.status(204).send();
    users.pop();
})

app.listen(3000,function(){
    console.log("server is running");
    
})

