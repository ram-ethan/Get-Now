// const express = require("express");
// const router = express.Router();
// const { upload } = require('../utils/upload')
// const { uploadImage } = require('../controller/imgControl');




// router.post('/upload', upload.single('file'), uploadImage);

// module.exports = router;

const express = require("express");
const router = express.Router();
const upload = require('../utils/upload')
const { uploadImage, getImage } = require('../controller/imgControl');


// const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

module.exports = router;