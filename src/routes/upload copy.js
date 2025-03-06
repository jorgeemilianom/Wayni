const express = require('express');
const multer = require('multer');
const ImportController = require('../controllers/ImportController');


const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/importar', upload.single('archivo'), ImportController.run);

module.exports = router;
