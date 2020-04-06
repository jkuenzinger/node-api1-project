const express = require('express');

const server = express();

let users = [
    {
        id: 1,
        name: 'Justin Kuenzinger'
    }
]

//middleware
server.use(express.json()) 

//endpoints
    // this one is just to have clarification the server is running on start
server.get('/', (req,res) =>{
    res.json({api: 'server is running!!!'})
})
//here I am going to do a post request to add a user to the users array
server.post('/api/users', (req, res) =>{
    const userInfo = req.body;
    users.push(userInfo)
    res.status(201).json(users)
})
//now i am going to set a get request that returns the users array
server.get('/api/users', (req, res) => {
    res.json(users);
})

//now we are going to make a get request to request users by id
server.get('/api/users/:id', (req, res) => {
    const id = res.parmas.id;
    const user = users.find(user => user.id == id)
    if(user){
        res.status(200).json(user);
    } else {
        res.status(404).json({message: "user not found"})
    }
    res.json(user)
})

const port =5000;
server.listen(port, () => console.log(`\n=== api on port ${port} ===\n`))