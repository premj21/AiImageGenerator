import express from 'express'
import {v2 as cloudinary} from 'cloudinary';
import Post from '../models/Post.js';


const router = express.Router();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

router.route('/').post(async (req, res) => {
  try {
    
    const {prompt, photo } = req.body;
    const newPost = await Post.create({
      prompt,
      photo
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;

