const mongoose = require('mongoose');

const DeudorSchema = new mongoose.Schema({
    cuit: { type: Number, required: true, unique: true },
    situacion_maxima: { type: Number, required: true },
    total_prestamos: { type: Number, required: true }
});

module.exports = mongoose.model('Deudor', DeudorSchema);
