const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, __basedir+ "/resource/static");
    },
    filename: (req,file,cb) => {
        cb(null,file.originalname);
    }
});

const upload = multer({
    storage: storage
})






