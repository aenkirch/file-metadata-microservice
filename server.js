'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');

var app = express();
const upload = multer();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let fileName = req.file.originalname;
  let fileSize = req.file.size;

  res.json({fileName, fileSize});
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
