import mongoose from 'mongoose';

const quotesSchema = mongoose.Schema({
    quotes: {
        type: String,
        required: [true, 'Please provide a username']
    }
    ,author: {
        type: String,
        required: [true, 'Please provide a username']
    }
    ,published: {
        type: String,
        required: [true, 'Please provide a username']
    }
    ,title: {
        type: String,
        required: [true, 'Please provide a username']
    }
    
})

//export default quotesSchema;
export default mongoose.model('Quotes', quotesSchema)