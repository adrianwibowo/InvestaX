const fs = require('fs')
module.exports = {
  getAllPhotos: async (req, res) => {
    try {
      const folders = fs.readdirSync('./albums')
      let data = []
      folders.forEach(albumFolder => {
        // accessing folder inside the albums folder
        if (albumFolder !== 'placeholder') {
          const folder = albumFolder.charAt(0).toUpperCase() + albumFolder.slice(1)
          const files = fs.readdirSync(`./albums/${albumFolder}`)
          files.forEach(photoFile => {
            data.push({
              album: folder,
              name: photoFile,
              path: `/albums/${folder}/${i}`,
              raw: `http://localhost:8888/photos/${albumFolder}/${photoFile}`
            })
          })
        }
      })
      res.json({
        message: 'OK',
        documents: data
      })
    } catch (err) {
      res.json({
        message: err.message
      })
    }
  },

  getSpecificPhoto: async (req, res) => {
    try {
      const { Album, FileName } = req.params
      const img = fs.readFileSync(`./albums/${Album}/${FileName}`)
      res.json({
        img
      })
    } catch (err) {
      res.json({
        message: err.message
      })
    }
  },

  uploadPhoto: async (req, res) => {
    try {
      let data = []
      const album = req.body.album.toLowerCase()
      req.files.forEach(file => {
        data.push({
          album: album,
          name: file.filename,
          path: file.path,
          raw: `http://localhost:8888/photos/${album}/${file.filename}`
        })
      })
      res.json({
        message: 'OK',
        data
      })
    } catch (err) {
      res.json({
        message: err.message
      })
    }
  },

  deletePhoto: async (req, res) => {
    try {
      const { Album, FileName } = req.params
      fs.unlinkSync(`./albums/${Album}/${FileName}`)
      res.json({
        message: 'OK'
      })

    } catch (err) {
      res.json({
        message: err.message
      })
    }
  },

  deletePhotos: async (req, res) => {
    try {
      req.body.forEach(data => {
        fs.unlinkSync(`./albums/${data.album}/${data.documents}`)
      })
      res.json({
        message:'OK'
      })
    } catch (err) {
      res.json({
        message: err.message
      })
    }
  }
}