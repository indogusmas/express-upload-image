const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage =  multer.diskStorage({   
    destination: function(req, file, cb) { 
       fs.mkdir('./upload/',(err)=>{
           cb(null, './upload/')
       });
    }, 
    filename: function (req, file, cb) { 
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
          );
    }
});

const upload = multer({
    storage: storage
}).single('file');

router.post("/", (req,res) => {
   upload(req,res, (err) => {
       if (err) {
           res.status(400).send(`${err}`)
       }
       console.log(req.file.path)
       res.send(req.file);
   });
})



module.exports = router;