const Deudor = require('../models/Deudor');
const Entidad = require('../models/Entidad');
const fs = require('fs');

class DeudoresService {
    async procesarArchivo(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const lineas = data.split('\n');

            for (const linea of lineas) {
                const datos = this.parsearLinea(linea);
                if (!datos) continue;

                // Procesar Entidad
                await Entidad.findOneAndUpdate(
                    { codigo: datos.codigo_entidad },
                    { $inc: { total_prestamos: datos.total_prestamos } },
                    { upsert: true, new: true }
                );

                // Procesar Deudor
                const deudor = await Deudor.findOne({ cuit: datos.cuit });

                if (deudor) {
                    deudor.situacion_maxima = Math.max(deudor.situacion_maxima, datos.situacion);
                    deudor.total_prestamos += datos.total_prestamos;
                    await deudor.save();
                } else {
                    await Deudor.create({
                        cuit: datos.cuit,
                        situacion_maxima: datos.situacion,
                        total_prestamos: datos.total_prestamos
                    });
                }
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    parsearLinea(linea) {
        if (linea.length < 40) return null;

        return {
            codigo_entidad: parseInt(linea.substring(0, 5)),
            cuit: parseInt(linea.substring(11, 22)),
            situacion: parseInt(linea.substring(22, 24)),
            total_prestamos: parseFloat(linea.substring(24, 36))
        };
    }
}

module.exports = new DeudoresService();
