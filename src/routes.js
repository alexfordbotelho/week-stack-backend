const express = require('express');
const multer = require('multer');
const multerSettings = require('./settings/multer');
const routes = express.Router();
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');


routes.post('/boxes', BoxController.store);
routes.post('/boxes/:id/files', 
            multer(multerSettings).single('file'),
            FileController.store);

routes.get('/boxes/:id', BoxController.show);

module.exports = routes;