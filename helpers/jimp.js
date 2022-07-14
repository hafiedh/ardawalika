const JIMP = require('jimp');
const sizeof = require("object-sizeof");

async function resize(req, res, next) {
    if (req.file){
        const buffer = req.file.buffer;
        console.log("DATA BUFFER SEBELUM :",sizeof(buffer));
        console.log("DATA BUFFER BASE 64 SEBELUM :",sizeof(buffer.toString('base64')));
        
        const image = await JIMP.read(buffer);
        image.resize(200, 200);
        image.quality(50);
        const bufferResize = await image.getBufferAsync(JIMP.MIME_JPEG);
        console.log("DATA BUFFER SETELAH :",sizeof(bufferResize));
        console.log("DATA BUFFER BASE 64 SETELAH :",sizeof(bufferResize.toString('base64')));
        req.file.buffer = bufferResize;
    }else {
        console.log("TIDAK ADA FILE");
        next();
    }
    next();
}

module.exports = resize;