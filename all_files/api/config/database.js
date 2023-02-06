const mongoose = require('mongoose')

const connection = () => {
    mongoose.connect('mongodb://localhost:27017')
    const db = mongoose.connection
    db.on('error', (err) => console.log(err))
    db.on('open', () => console.log('DATABASE : OK'))
}

module.exports = { connection }