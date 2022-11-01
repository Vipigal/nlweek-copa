import express from 'express';

require('dotenv').config();

const app = express();

const cors = require('cors');
app.use(cors({
	origin: process.env.CLIENT_URL,
	credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

const poolRouter = require('../src/domains/pools/controllers/index');
app.use('/pools',poolRouter);

export default app;