const fs = require('fs')
const path = require('path')

console.log('path ===> ', path.join(__dirname, '../uploads/artists'))

module.exports = (req, res) => {
  const {originalname, buffer} = req.file
  const type = path.extname(originalname)
  const pathToWrite = path.join(__dirname, '../uploads/artists')

  if (type === '.png' || type === '.jpg') {
    fs.writeFile(`${pathToWrite}/${originalname}`, buffer, (err) => {
      if (err) {
        res.send('An error happened when uploading your file : ', err)
      }
      res.sendMessage = pathToWrite
      res.status(200).send(pathToWrite).end()
    })
  }
}
