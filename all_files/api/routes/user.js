const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/', async(_req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            res.status(500).json('User does not exists')
        }
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async(req, res) => {
    const { firstname, lastname, email, password } = req.body

    try {
        const newUser = new User({
            firstname,
            lastname,
            email,
            password
        })

        await newUser.save()

        res.status(200).json({ message: 'User added succesfully' })
    } catch (err) {
        if (err.code === 11000) {
            res.status(404).json({ message: 'User already exists.' })
            console.log(err)
        } else {
            res.status(500).json(err)
        }
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        if (!user) {
            res.status(500).json('User does not exists')
        }
        res.status(201).json('User deleted succesfully')
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router