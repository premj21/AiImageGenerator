import express from 'express';
import { Configuration,OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: "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",
});


const router = express.Router();
const openai = new OpenAIApi(configuration);
router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(
error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;

// const openai = new OpenAIApi(configuration);



// const router = express.Router();

// router.post('/', async(req,res)=>{
//    try {
//     const {prompt} = req.body;

//     const response = await openai.createImage({
//         prompt,
//         n:'1',
//         size:'1024x1024',
//         response_format:'b64_json'
//     });
//     console.log('2jgdalkgj lfjglk gj')

//     res.json({success:true,image:response.data.data[0].b64_json});
    
//    } catch (error) {
//     // console.log(error);
//     return res.status(500).send({success:false,error:error});
//    }
// })

// export default router ;

