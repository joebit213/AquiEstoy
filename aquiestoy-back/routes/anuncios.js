const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Anuncio = require('../models/Anuncio')
const Comment = require('../models/Comment')
const {verifyToken} = require('../helpers/jwt')
const uploadCloud = require('../helpers/cloudinary')


// router.get('/private', verifyToken, (req,res,next)=>{
//   res.send("Esto sololo ven los usuarios logueados como tu " + req.user.username)
// })

//publicar 

router.post('/anuncios', verifyToken, uploadCloud.single("image"), (req,res,next) =>{
  req.body['user']=req.user._id
  if(req.file)req.body.imageURL = req.file.url
  Anuncio.create(req.body)
  .then(anuncios => {
    User.findByIdAndUpdate(anuncios.user, {
      $push: { anuncio: anuncios._id }
    })
  .then(t=>{
    console.log(t)
  })
  .catch(e=>res.json(e))
  res.status(200).json(anuncios)
})
  .catch(e=>next(e))
})

//ver publicaciones

router.get('/anuncios', (req,res,next) =>{
  Anuncio.find().populate('user').populate({path:'comments',populate:{path:'user'}})
     .then(anuncios=>{        
       res.status(200).json({anuncios})
       //console.log(trabajos)
     })
     .catch(e=>{
       //next(e)
       console.log(e)
     })
})


//comentarios
router.post('/comentarios', verifyToken, (req,res,next) =>{
  Comment.create(req.body)
  .then(comentarios => {
    Anuncio.findByIdAndUpdate(comentarios.anuncio, {
      $push: { comments: comentarios._id }
    })
  .then(t=>{
    console.log(t)
  })
  .catch(e=>res.json(e))
  res.status(200).json(comentarios)
})
  .catch(e=>next(e))
})


//ver comentarios
router.get('/comentarios', (req,res,next) =>{
  Comment.find()
     .then(anuncios=>{        
       res.status(200).json({anuncios})
       //console.log(trabajos)
     })
     .catch(e=>{
       //next(e)
       console.log(e)
     })
})




module.exports = router


