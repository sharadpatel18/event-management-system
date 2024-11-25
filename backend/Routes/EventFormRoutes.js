const { CreateEventByOrganization, GetEventById, UpdateEventByOrganization, DeleteEventByOrganization } = require('../Controllers/EventFormController');
const { Authentication } = require('../Middleware/Auth');

const router = require('express').Router();

router.post('/CreateEvent' , Authentication , CreateEventByOrganization);
router.get('/GetEventById/:id' , Authentication , GetEventById);
router.put('/UpdateById/:id' , Authentication , UpdateEventByOrganization);
router.delete('/DeleteById/:id' , Authentication , DeleteEventByOrganization);

module.exports = router;