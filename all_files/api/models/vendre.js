const mongoose = require('mongoose')

const vendreSchema = mongoose.Schema({
    prenom: {
        type: String,
        required: false
    },
    nom: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    societe: {
        type: String,
        required: true,
    },
    enseigne: {
        type: String,
        required: false
    },
    type_de_bien: {
        type: String,
        required: true
    },
    type_de_transaction: {
        type: String,
        required: true,
    },
    emplacement: {
        type: String,
        required: true
    },
    activite: {
        type: String,
        required: false
    },
    numero: {
        type: Number,
        required: true,
    },
    voie: {
        type: String,
        required: true
    },
    ville: {
        type: String,
        required: false
    },
    code_postal: {
        type: Number,
        required: true,
    },
    prix_net_vendeur: {
        type: Number,
        required: true
    },
    loyer_annuel: {
        type: Number,
        required: false
    },
    CA: {
        type: Number,
        required: false,
    },
    benefices: {
        type: Number,
        required: false
    },
    surface_commerciale: {
        type: Number,
        required: false
    },
    surface_totale: {
        type: Number,
        required: true,
    },
    vitrine: {
        type: String,
        required: true
    },
    type_de_bail: {
        type: String,
        required: false
    },
    debut: {
        type: Date,
        required: false,
    },
    fin: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('Vendre', vendreSchema)