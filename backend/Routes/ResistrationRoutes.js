const router  = require('express').Router();
const {CreateResistration} = require('../Controllers/ResistrationController');
const { Authentication } = require('../Middleware/Auth');


// resister in event
router.post('/createResistration' , Authentication , CreateResistration);


//get history in event

module.exports = router;