import registerC from '../controllers/RigesterC.js'
import express from 'express';

let registerRout = express.Router();

registerRout.post('/register',registerC)

export default registerRout;