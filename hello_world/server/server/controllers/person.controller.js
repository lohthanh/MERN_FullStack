const { Person } = require('../models/person.model');

module.exports.index = (req, res) => {
    console.log("Hello World!")
    res.json({
        message: "Hello World!"
    });
}

module.exports.createPerson = (req, res) => {
    const { firstName, lastName } = req.body;
    Person.create({
        firstName, 
        lastName
    })
        .then(person => res.json(person))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllPeople = (req, res) => {
    Person.find({})
        .then(persons => res.json(persons))
        .catch(err => res.json(err))
}

module.exports.getPerson = (req, res) => {
    Person.findOne({_id: req.params.id})
        .then(person => res.json(person))
        .catch(err => res.json(err))
}

module.exports.updatePerson = (req, res) => {
    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePerson = (req, res) => {
    Person.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}