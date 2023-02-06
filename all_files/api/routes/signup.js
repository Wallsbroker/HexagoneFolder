/* eslint-disable n/handle-callback-err */
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.post('/register', (req, res) => {
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({
            email: req.body.email
        })
        .then((user) => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (_err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then((user) => {
                            res.json({ status: user.email + ' registered!' })
                        })
                        .catch((err) => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: ' user already exists' })
            }
        })
        .catch((err) => {
            res.send('error: ' + err)
        })
})

module.exports = router