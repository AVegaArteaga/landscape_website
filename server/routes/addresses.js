import express from 'express';
const router = express.Router();
import { getAddressPosts, createAddressPosts, getAddressPostByName } from '../controllers/addresses.js';
import auth from "../middleware/auth.js";
router.get('/:penisExtension', getAddressPostByName);
router.get('/', getAddressPosts);
router.post('/', auth, createAddressPosts);




export default router;