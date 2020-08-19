const fs = require('fs')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // check wheter album name exist or not, if not it will create new album folder 
        if (!fs.existsSync(`./albums/${req.body.album}`)) {
            fs.mkdir(`./albums/${req.body.album}`) }
        cb(null, `./albums/${req.body.album}`) // if success will direct to destination path, and if error it will return Null
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)// data will saved as it original name
    }
})
const upload = multer({ storage })
module.exports =  upload