import mongoose from "mongoose";
const Post = new mongoose.Schema({
      prompt:{
        type:String,
        required:true
    },
      photo:{
        type:String,
        required:true
    },
    
});

const post = new mongoose.model('Post',Post);

export default post; 