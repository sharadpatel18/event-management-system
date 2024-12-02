const router  = require('express').Router();
const {CreateResistration} = require('../Controllers/ResistrationController');
const { Authentication } = require('../Middleware/Auth');

router.post('/createResistration' , Authentication , CreateResistration);


module.exports = router;