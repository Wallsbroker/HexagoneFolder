const mongoose = require('mongoose')

const referenceSchema = mongoose.Schema({
    photo: {
        type: Object,
        required: true,
        unique: true
    },
    emplacement: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true,
    },

    vendeur: {
        type: String,
        required: true
    },

    acquereur: {
        type: String,
        required: true
    },
    lien: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Reference', referenceSchema)