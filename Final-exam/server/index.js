const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
const Schema = mongoose.Schema;

const app = express()
const port = 4000


app.use(cors())
app.use(express.json())

const bagsSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
})

const bagsModel = mongoose.model('Bags', bagsSchema);


app.get('/bags',  async(req, res) => {
    try {
        const response = await bagsModel.find({})
        res.json(response)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
})

app.get('/bags/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const response = await bagsModel.findById(id)
        res.json(response)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
})

app.delete('/bags/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const deletedBags = await bagsModel.findByIdAndDelete(id)
        res.json(deletedBags)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
})

app.post('/bags',  async(req, res) => {
    try {
        const newBags = bagsModel({...req.body})
        await newBags.save()
        res.json(newBags)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
})

mongoose.connect('mongodb+srv://solaehazmp202:shola123@cluster0.tdger.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {console.log('Connected!')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })

  });

