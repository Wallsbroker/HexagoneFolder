const express = require('express')
const router = express.Router()
const Reference = require('../models/Reference')

// GET ALL références////////////////////////////////////////////////////
router.get('/', async(_req, res) => {
    try {
        const reference = await Reference.find()
        res.status(200).json(reference)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET référence BY ID//////////////////////////////////////////////
router.get('/:id', async(req, res) => {
    try {
        const reference = await Reference.findById(req.params.id)
        if (!reference) {
            res.status(500).json('cette référence nexiste pas')
        }
        res.status(201).json(reference)
    } catch (err) {
        res.status(500).json(err)
    }
})

// ADD A référence/////////////////////////////////////////////
router.post('/', async(req, res) => {
    const { photo, emplacement, description, vendeur, acquereur, lien } = req.body

    try {
        const newReference = new Reference({
            photo,
            emplacement,
            description,
            vendeur,
            acquereur,
            lien
        })

        await newReference.save()

        res.status(200).json({ message: 'Référence bien ajoutée' })
    } catch (err) {
        if (err.code === 11000) {
            res.status(404).json({ message: 'Référence existe déjà.' })
        } else {
            res.status(500).json(err)
        }
    }
})

// MAKE CHANGES ////////////////////////////////////////////////
router.patch('/:id', async(req, res) => {
    const updates = {
        photo: req.body.photo,
        emplacement: req.body.emplacement,
        description: req.body.description,
        vendeur: req.body.vendeur,
        acquereur: req.body.acquereur,
        lien: req.body.lien
    }

    try {
        await Reference.findOneAndUpdate(req.params.id, updates)
        const reference = await reference.findById(req.params.id)

        if (!reference) {
            res.status(500).json({ message: 'référence introuvable.' })
        }

        res.status(200).json(référence)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// DELETE A référence //////////////////////////////////////////////
router.delete('/:id', async(req, res) => {
    try {
        const reference = await Reference.findByIdAndRemove(req.params.id)
        if (!reference) {
            res.status(500).json('référence introuvable')
        }
        res.status(200).json({ message: 'référence bien supprimée' })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router