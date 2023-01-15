const express = require("express");
const { v4: uuidv4} = require("uuid");
const cors  = require("cors");;


const app = express();
app.use(cors());

app.use(express.json());

const users = [];

function userArraryExists (req, res, next) {
    const { id } = req.params;
    const user = users.find(user => user.id === id);
    if(user){
        req.user = user;
        return next();

    }
   return res.status(404).json({ error: "User not found"})

}

function userExists (req, res, next) {
    const { id } = req.params;
    const user = users.find(user => user.id === id);
    if(user){
        req.user = user;
        return next();

    }
   return res.status(404).json({ error: "User not found"})

}

console.log(users)


app.post("/users", (req, res) => {
    const { name, email, age, city } = req.body;
    const newUser = {
        id: uuidv4(),
        name,
        email,
        age,
        city,
    }
users.push(newUser);

return res.status(201).json(newUser);

})

app.get("/users", (req, res) => {
    return res.status(200).json(users);
})

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === id);
    if(!user){
        return res.status(404).json({ error: "User not found"})
    }

    return res.status(200).json(user);
})


app.delete("/users/:id", userArraryExists, (req, res) => {
    const { user } = req;
    const indice = users.indexOf(user);
      
    users.splice(indice, 1);

    return res.status(200).json(users);
 })

app.put("/user/:id", userExists, (req, res) => {
    const { name, age, city } = req.body;
    const { user } = req;
 
    user.name = name;
    user.age = age;
    user.city = city;
    return res.json(users);
})

app.listen(5555)