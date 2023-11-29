const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users.js')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/crud')

app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(users => { res.json(users) })
        .catch(err => res.send(err))
})

app.get('/', (req, res) => {
    UserModel.find({})
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            console.error(err);
        })
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findById({ _id: id })
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            console.error(err);
        })
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id
    UserModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            console.error(err);
        })
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then(result =>{
        res.json(result)
    })
    .catch(err => {
        res.send(err)
        console.error(err);
    })
})

app.listen(3000, () => {
    console.log(`server running on port 3000`);
})