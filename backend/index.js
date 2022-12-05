const express=require('express');
const mongoose=require('mongoose');
const userRoute=require('./routes/users')
//const multer=require('multer');
const app=express();
   
  
//middlewares
app.use(express.json());
app.use('/backend/users',userRoute)

//file storage 
/*
const storage=multer.diskStorage({ 
    destination:(req,file,cb)=>{
        cb(null,'images')
    },
    filename:(req,file,cb)=>{
       cb(null,file.originalname)
    },
})

const upload = multer({ storage: storage });
//upload single file
app.post('/backend/image',upload.single('profilepic'),(req,res)=> {
   // res.status(200).json("hello i from index.js");
    
    const file=req.file;   
    if(file) 
      res.status(200).json(file)
     else
       res.status(502).json('file upload failed')
  })
  */
//upload multiple files
/*
app.post('/backend/images',upload.array("documents",2),(req,res)=>{
    const files=req.files;
    if(files)
      res.status(200).json(files)
     else
       res.status(503).json('multiple files upload failed')
})
 */
//db  connection
const MONGO_URL="mongodb+srv://Snehasis:Snehasis12@cluster0.fzw3snb.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(MONGO_URL).then(()=>{
    console.log('connected to db');
}).catch(()=>{
    console.log("connection failed");
}) 

//port
app.listen(4000,(req,res,next)=>{
    console.log('server is running on the port 4000');
})

  