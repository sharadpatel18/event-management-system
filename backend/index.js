const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRoutes = require('./Routes/AuthRoute');
const EventFormRoutes = require('./Routes/EventFormRoutes');
const Connetion = require('./Utilities/Connection');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use('/auth' , AuthRoutes);
app.use('/EventForm' , EventFormRoutes);

app.listen(process.env.PORT , ()=>{
    console.log(`server started at ${process.env.PORT}`);
})
