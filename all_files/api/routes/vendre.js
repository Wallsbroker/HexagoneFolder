const express = require('express')
const router = express.Router()
const Vendre = require('../models/vendre')

// GET ALL vendres////////////////////////////////////////////////////
router.get('/', async(_req, res) => {
    try {
        const vendres = await Vendre.find()
        res.status(200).json(vendres)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET Vendre BY ID//////////////////////////////////////////////
router.get('/:id', async(req, res) => {
    try {
        const vendre = await Vendre.findById(req.params.id)
        if (!vendre) {
            res.status(500).json('Vendre does not exists')
        }
        res.status(201).json(vendre)
    } catch (err) {
        res.status(500).json(err)
    }
})

// ADD A Vendre/////////////////////////////////////////////
router.post('/', async(req, res) => {
    const {
        prenom,
        nom,
        tel,
        email,
        societe,
        enseigne,
        type_de_bien,
        type_de_transaction,
        emplacement,
        activite,
        numero,
        voie,
        ville,
        code_postal,
        prix_net_vendeur,
        loyer_annuel,
        CA,
        benefices,
        surface_commerciale,
        surface_totale,
        vitrine,
        type_de_bail,
        debut,
        fin
    } = req.body

    try {
        const newvendre = new Vendre({
            prenom,
            nom,
            tel,
            email,
            societe,
            enseigne,
            type_de_bien,
            type_de_transaction,
            emplacement,
            activite,
            numero,
            voie,
            ville,
            code_postal,
            prix_net_vendeur,
            loyer_annuel,
            CA,
            benefices,
            surface_commerciale,
            surface_totale,
            vitrine,
            type_de_bail,
            debut,
            fin
        })

        await newvendre.save()

        res.status(200).json({ message: 'Vendre added succesfully' })
    } catch (err) {
        if (err.code === 11000) {
            res.status(404).json({ message: 'Vendre already exists.' })
        } else {
            res.status(500).json(err)
            console.log(err)
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
        await Vendre.findOneAndUpdate(req.params.id, updates)
        const Vendre = await Vendre.findById(req.params.id)

        if (!vendre) {
            res.status(500).json({ message: 'Vendre not found.' })
        }

        res.status(200).json(vendre)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// DELETE A Vendre //////////////////////////////////////////////
router.delete('/:id', async(req, res) => {
    try {
        const vendre = await Vendre.findByIdAndRemove(req.params.id)
        if (!vendre) {
            res.status(500).json('Vendre does not exists')
        }
        res.status(200).json({ message: 'Vendre deleted succesfully' })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router