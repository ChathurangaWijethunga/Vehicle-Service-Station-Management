const Mongoose = require("mongoose");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: 'mongodb+srv://itpmproject-2022:ALUA6wvovypYEDHd@itpm-project-2022.dxsfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file, cb) => {

        if (file.mimetype !== 'image/png' && file.mimetype!=='image/jpg' && file.mimetype !=='image/jpeg') {
            
            return {
                bucketName: "file",
            }
            // const filename = `${file.originalname}`;
          //  return filename;
        }
        else {
            //const filename = `${file.originalname}`;
            return {
                bucketName: "photos",
                filename: `${file.originalname}`,
            };
        }
/*
        return {
            bucketName: "photos",
            filename: `${file.originalname}`,
        };*/
    },
})

module.exports = multer({ storage });




