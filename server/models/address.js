import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    
    creator: String, //PostAddress.creator == user.id
    
    name: String,
    address: String,
    city: String,
    state: String,

    service:{
        type: String,
        default: new Date(),
    },
    
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostAddress = mongoose.model('PostAddress', postSchema);

export default PostAddress;