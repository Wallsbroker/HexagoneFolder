const express = require('express')
const router = express.Router()
const Actualite = require('../models/Actualite')

// GET ALL actualites////////////////////////////////////////////////////
router.get('/', async(_req, res) => {
    try {
        const actualites = await Actualite.find()
        res.status(200).json(actualites)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET Actualite BY ID//////////////////////////////////////////////
router.get('/:id', async(req, res) => {
    try {
        const actualite = await Actualite.findById(req.params.id)
        if (!actualite) {
            res.status(500).json('actualite does not exists')
        }
        res.status(201).json(actualite)
    } catch (err) {
        res.status(500).json(err)
    }
})

// ADD A actualite/////////////////////////////////////////////
router.post('/', async(req, res) => {
    const { id, titre, contenu, date_publication, auteur } = req.body

    try {
        const newActualite = new Actualite({
            id,
            titre,
            contenu,
            date_publication,
            auteur
        })

        await newActualite.save()

        res.status(200).json({ message: 'Actualite added succesfully' })
    } catch (err) {
        if (err.code === 11000) {
            res.status(404).json({ message: 'Actualite already exists.' })
        } else {
            res.status(500).json(err)
        }
    }
})

// MAKE CHANGES ////////////////////////////////////////////////
router.patch('/:id', async(req, res) => {
    const updates = {
        number: req.body.number,
        departure: req.body.departure,
        plane: req.body.plane,
        date: req.body.date
    }

    try {
        await Actualite.findOneAndUpdate(req.params.id, updates)
        const updateActualite = await Actualite.findById(req.params.id)

        if (!actualite) {
            res.status(500).json({ message: 'Actualite not found.' })
        }

        res.status(200).json(actualite)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// DELETE A Actualite //////////////////////////////////////////////
router.delete('/:id', async(req, res) => {
    try {
        const actualite = await Actualite.findByIdAndRemove(req.params.id)
        if (!actualite) {
            res.status(500).json('actualite does not exists')
        }
        res.status(200).json({ message: 'actualite deleted succesfully' })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router