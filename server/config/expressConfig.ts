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

const userRouter = require('../src/domains/users/controllers/index');
app.use('/users',userRouter);

const guessRouter = require('../src/domains/guesses/controllers/index');
app.use('/guesses',guessRouter);

export default app;