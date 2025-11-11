const express = require('express');
const router = express.Router();
const multer = require('multer');
const { create, view, details, update, changeStatus, destroy } = require('../../controller/admin/color.controller');
const upload = multer({ dest: 'uploads/default' })

module.exports = server => {

    router.post('/create', upload.none(), create);

    router.post('/view', upload.none(), view);

    router.post('/details/:id', upload.none(), details);

    router.patch('/update/:id', upload.none(), update);

    router.patch('/change-status', upload.none(), changeStatus);

    router.patch('/delete', upload.none(), destroy);

    server.use('/api/admin/color', router);
}