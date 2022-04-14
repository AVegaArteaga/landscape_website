import express from 'express';
import mongoose from 'mongoose';

import PostAddress from '../models/address.js';

const router = express.Router();



//make one for just the users stuff
export const getAddressPosts = async (req, res) => { 
    
    try {
        const postAddresses = await PostAddress.find();
                
        res.status(200).json(postAddresses);
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
}

export const getAddressPostByName = async(req, res) =>{

    const {penisExtension}  = req.params;
    try {
        const post = await PostAddress.find({creator: penisExtension});
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createAddressPosts= async (req, res) => {
    const post = req.body;

    
    const newPostAddresses = new PostAddress({ ...post, creator: req.userId, createdAt: new Date().toISOString(), service: new Date().toISOString() })
    console.log(newPostAddresses);
    
    try {
        await newPostAddresses.save();

        res.status(201).json(newPostAddresses );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;