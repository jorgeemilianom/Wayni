const Deudor = require('../models/Deudor');
const Entidad = require('../models/Entidad');
const DeudoresService = require('../services/DeudoresService');


class ImportController {
    async import(req, res) {
        try {
            if (!req.file) return res.status(400).json({ error: 'Archivo requerido' });

            await DeudoresService.procesarArchivo(req.file.path);

            res.json({
                message: 'Importación completada'
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Error al procesar el archivo'
            });
        }
    }

    async deudores(req, res) {
        try {
            const deudores = await Deudor.find();
            res.json(deudores);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener deudores' });
        }
    }

    async entidades(req, res) {
        try {
            const entidades = await Entidad.find();
            res.json(entidades);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener entidades' });
        }
    }
}

module.exports = new ImportController();