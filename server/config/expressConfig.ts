import express from 'express';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

const poolRouter = require('../src/domains/pools/controllers/index');
app.use('/pools',poolRouter);

export default app;