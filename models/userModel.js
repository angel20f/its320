import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username']
    }
    ,email: {
        type: String,
        required: [true, 'Please provide a username']
    }
    ,password: {
        type: String,
        required: [true, 'Please provide a username']
    }
    
})

//export default userSchema;
export default mongoose.model('User', userSchema)