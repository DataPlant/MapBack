const router = require('express').Router();
const db = require('../models/index')

router.get('/', (req, res) => {
    db.Pins.find({}, (err, foundPins) => {
        if (err) return console.log(err);
        res.json(foundPins)
    })
})

router.post('/', (req, res) => {
    db.Pins.create(req.body, (err, createdPin) => {
        if (err) return console.log(err);
        res.json(createdPin)
    })
})

module.exports = router;