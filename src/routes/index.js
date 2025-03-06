const express = require('express');
const multer = require('multer');
const ImportController = require('../controllers/ImportController');


const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/importar', upload.single('archivo'), ImportController.import);

router.get('/deudores', ImportController.deudores);

router.get('/entidades', ImportController.entidades);


module.exports = router;
