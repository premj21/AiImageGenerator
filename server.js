import express from "express";
import * as dotenv  from 'dotenv'
import cors from 'cors';
import mongoose from "mongoose";
import addone from './routes/addone.js';
import findnew from './routes/findnew.js';

dotenv.config({path:'./config.env'});

mongoose.set('strictQuery',true);

mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>console.log('mongo connected'))
.catch((e)=>console.log(e));

const app = express();
app.use(cors());
app.use(express.json({limit:'100mb'}));

app.use('/api/post',addone);
app.use('/api/find',findnew);

app.get('/',async(req,res)=>{
  res.send('hellow from server');

})

app.listen(process.env.Prt,()=>{
    console.log(`server is running on PORT ${process.env.Prt}`);
})

