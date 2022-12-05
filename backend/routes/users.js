const express=require('express');
const { controlUserdata, getUserdata } = require('../controllers/usercontroller');
const router=express.Router();
const multer=require('multer');


const storage=multer.diskStorage({   
  destination:(req,file,cb)=>{
      cb(null,'documents',(error)=>{
        console.log(error)
      })
  },
  filename:(req,file,cb)=>{
     cb(null,file.originalname)
  },
})
const upload = multer({ storage: storage });
router.post('/create',upload.single('profilepic'),controlUserdata)
router.get('/userdata',getUserdata)
module.exports=router; 