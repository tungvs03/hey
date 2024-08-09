import express from 'express';
import {AuthControllers}  from './auth.controller';

const authRouter = express.Router();
const authControllers = new AuthControllers();

authRouter
    .post("/", authControllers.register)


export default authRouter;