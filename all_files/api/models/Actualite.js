const mongoose = require('mongoose')

const actualiteSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },

    titre: {
        type: String,
        required: true,
    },
    contenu: {
        type: String,
        required: true
    },
    date_publication: {
        type: Date,
        required: true
    },
    auteur: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Actualite', actualiteSchema)