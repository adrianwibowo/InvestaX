const router = require('express').Router()
const upload = require('./middleware/upload')
const photoController = require('./controller/ImageAlbum.js')

router.get('/photos/list', photoController.getAllPhotos)
router.post('/photos', upload.array('documents'), photoController.uploadPhoto)
router.delete('/photos', photoController.deletePhotos)
router.get('/photos/:Album/:FileName', photoController.getSpecificPhoto)
router.delete('/photos/:Album/:FileName', photoController.deletePhoto)

module.exports = router