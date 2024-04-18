
const File = require('../models/file.js');
require("dotenv").config();

// exports.uploadImage = async (req, res) => {
//     const fileObj = {
//         path: req.file.path,
//         name: req.file.originalname
//     }
//     try {
//         const file = await File.create(fileObj);
//         console.log(file);
//         res.status(200).json({ path: `http://localhost:${process.env.PORT}/file/${file._id}` });
//     }
//     catch (error) {
//         console.log(error.message);
//         res.status(500).json({
//             error: error.message
//         })
//     }
// }

// // export default { uploadImage };
// exports.downloadImage = async (req, res) => {
//     try {
//         const file = await File.findById(req.params.fileId);
//         file.downloadContent++;
//         await file.save();
//         res.download(file.path, file.name);
//     }
//     catch (error) {
//         console.log(error.message);
//         res.status(500).json({
//             error: error.message
//         })
//     }

// }



exports.uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }

    try {
        const file = await File.create(fileObj);
        response.status(200).json({ path: `http://localhost:${process.env.PORT}/file/${file._id}` });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}

exports.getImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);
        console.log(file);
        file.downloadCount++;

        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(200).json({ msg: error.message });
    }
}