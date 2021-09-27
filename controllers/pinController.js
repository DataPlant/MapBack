const router = require('express').Router();
const db = require('../models/index')

router.get('/', (req, res) => {
    db.Pins.find({}, (err, foundPins) => {
        if (err) return console.log(err);
        res.json(foundPins)
    })
})

router.get('/:id', (req, res) => {
    db.Pins.findById(req.params.id, (err, foundPin)=>{
        res.json(foundPin)
    })
})

router.post('/', (req, res) => {
    db.Pins.create(req.body, (err, createdPin) => {
        db.Cities.findByIdAndUpdate(createdPin.city, 
            { $push: { pins: createdPin } }, 
            (err, foundCity) => {
            if (err) return console.log(err)
            console.log(foundCity)

            res.json(createdPin)
        })
    })
})

router.put('/:id', (req, res) => {
    db.Pins.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedPost) => {
            if (err) return console.log(err)

            res.json(updatedPost)
        }
    )
})

router.delete('/:id', (req, res) => {
    db.Pins.findByIdAndDelete(req.params.id, (err, deletedPin) => {
        if (err) return console.log(err)
        console.log('Deleted Post')
        res.json({message: 'Deleted'})
    })
})

module.exports = router;