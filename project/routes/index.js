var express = require('express');
var router = express.Router();
const visualRecognitionHelper = require('../services/ibm/visualRecognitionHelper');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/camera', function(req, res, next) {
  res.render('camera');
});

router.get('/visual', visualRecognitionHelper.faceDetect, function (req, res, next) {
  res.render("visual", {
    message: "ok",
    apiData: res.locals.apiData
  });
});

router.get('/detail', function(req, res, next) {
  res.render('detail');
});


module.exports = router;
