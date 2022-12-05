const User=require('../models/User')


const  controlUserdata=async(req,res,next)=>{
 
  const newUser=new User({
    name:req.body.name,
    email:req.body.email,
    document:req.file.filename,
  
   })  
   //console.log(req.headers)
   try {
     const user=await newUser.save();
     res.status(200).json(user);
   } catch (error) {
    res.status(500).json( "error in create userdata "+error);
    console.log(error);
   }   

}

//get userdata
const  getUserdata=async(req,res,next)=>{
  try {
     const allusers=await User.find();
    res.status(200).json(allusers);
  } catch (error) {
   res.status(500).json("error in get userdata "+error)
   console.log(error);
  }  
  
}

module.exports={controlUserdata,getUserdata}