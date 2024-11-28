const router = require('express').Router();
const {SignupController ,LoginController} = require('../Controllers/AuthController')


router.post('/signup' , SignupController)

router.post('/login' , LoginController)


module.exports = router