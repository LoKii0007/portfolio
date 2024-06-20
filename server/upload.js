const express = require('express');
const fileUpload = require('express-fileupload');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const cors = require("cors")

const app = express();

app.use(fileUpload());
app.use('/downloads', express.static('downloads'));
app.use(cors())

app.post('/upload', function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let modelFile = req.files.modelFile;
  let uploadPath = './uploads/' + modelFile.name;

  modelFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    let dracoFile = uploadPath.replace('.gltf', 'Draco.gltf');
    let glbFile = uploadPath.replace('.gltf', '.glb');
    let jsxFile = uploadPath.replace('.gltf', '.jsx');

    exec(`gltf-pipeline -i ${uploadPath} -o ${dracoFile} -d && gltf-pipeline -i ${dracoFile} -o ${glbFile} -b && npx gltfjsx ${dracoFile} --transform -o ${jsxFile}`, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }

      fs.renameSync(jsxFile, './downloads/' + path.basename(jsxFile));
      fs.renameSync(glbFile, './downloads/' + path.basename(glbFile));

      res.json({
        jsxFile: '/downloads/' + path.basename(jsxFile),
        glbFile: '/downloads/' + path.basename(glbFile)
      });
    });
  });
});

app.listen(3000, function() {
  console.log('App is listening on port 3000');
});
