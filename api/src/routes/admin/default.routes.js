const express = require('express');
const router = express.Router();
const multer = require('multer');
const { create, view, details, update, changeStatus, destroy } = require('../../controller/admin/default.controller');
const upload = multer({ dest: 'uploads/default' })
const path = require('path');

module.exports = server => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/default')
        },
        filename: function (req, file, cb) {
            extension = path.extname(file.originalname);
            const uniqueSuffix = Date.now()+extension; 
            cb(null, file.fieldname + '-' + uniqueSuffix);
        }
    })

    const uploads = multer({ storage: storage })

    const singleImage = uploads.single('image')
    const multipleImage = uploads.array('images')

    const imageUploads = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }]);

    router.post('/create', singleImage, create);

    router.post('/view', upload.none(), view);

    router.post('/details/:id', upload.none(), details);

    router.patch('/update/:id', singleImage, update);

    router.patch('/change-status', upload.none(), changeStatus);

    router.patch('/delete', upload.none(), destroy);

    server.use('/api/admin/default', router);
}