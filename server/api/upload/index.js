//  material: 
//  codeforgeek.com/2014/11/file-uploads-using-node-js/cd 

'use strict';

var express = require('express');
var controller = require('./upload.controller');
var multer = require('multer');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/profile', multer({ dest: './upload/' }), controller.saveProfile);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
