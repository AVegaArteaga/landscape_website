import express from 'express';
const router = express.Router();
import { getAddressPosts, createAddressPosts, getAddressPostByName } from '../controllers/addresses.js';
import auth from "../middleware/auth.js";
// router.get('/', getAddressPosts);
router.get('/:penisExtension', getAddressPostByName);
router.post('/', auth, createAddressPosts);




export default router;