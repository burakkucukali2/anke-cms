const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDatabase = require('./helpers/database/connectDatabase');
const errorHandler = require('./middlewares/errors/errorHandler');
const routers = require('./routers');

//Environment variables
dotenv.config({ path: './config/env/config.env' });

const app = express();
const PORT = process.env.PORT;

//MongoDB Connection
connectDatabase();

//Cors
app.use(cors());

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routers Middleware
app.use('/api', routers);

//Error Handling Middleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));