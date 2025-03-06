const mongoose = require('mongoose');

const EntidadSchema = new mongoose.Schema({
    codigo: { 
        type: Number, 
        required: true, 
        unique: true 
    },
    total_prestamos: { 
        type: Number, 
        required: true 
    }
});

module.exports = mongoose.model('Entidad', EntidadSchema);
