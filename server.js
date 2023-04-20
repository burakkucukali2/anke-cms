const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDatabase = require('./helpers/database/connectDatabase');
const customErrorHandler = require('./middlewares/errors/customErrorHandler');
const routers = require('./routers');

//Environment variables
dotenv.config({ path: './config/env/config.env' });

const app = express();
const PORT = process.env.PORT;

//MongoDB Connection
connectDatabase();

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routers Middleware
app.use('/api', routers);

//Error Handling Middleware
app.use(customErrorHandler)

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));