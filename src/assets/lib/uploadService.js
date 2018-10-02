const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
  const {originalname, buffer} = req.file
  const type = path.extname(originalname)
  const pathToWrite = path.join(__dirname, '../uploads/artists')
  const pathToFile = `${pathToWrite}/${originalname}`

  if (type === '.png' || type === '.jpg') {
    fs.writeFile(pathToFile, buffer, (err) => {
      if (err) {
        res.send('An error happened when uploading your file : ', err)
      }
      // res.sendMessage = pathToFile
      res.status(200).send(pathToFile).end()
    })
  }
}
