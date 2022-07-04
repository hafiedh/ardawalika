const JIMP = require('jimp');
const sizeof = require("object-sizeof");

async function resize(req, res, next) {
    if (req.file){
        const buffer = req.file.buffer;
        console.log("BUFFER SEBELUM DIPROSES : ", buffer);
        console.log(
        "BASE 64 ENCODED LENGTH SEBELUM DIPROSES : ",
        buffer.toString("base64").length
        );
        console.log("BUFFER SIZE SEBELUM DIPROSES : ", sizeof(buffer));
        
        // jimp resize and compress image
        const image = await JIMP.read(buffer);
        image.resize(200, 200);
        image.quality(80);
        const bufferResize = await image.getBufferAsync(JIMP.MIME_JPEG);
        console.log("BUFFER SETELAH DIPROSES : ", bufferResize);
        console.log(
        "BASE 64 ENCODED LENGTH SETELAH DIPROSES : ",
        bufferResize.toString("base64").length
        );
        console.log("BUFFER SIZE SETELAH DIPROSES : ", sizeof(bufferResize));
        req.file.buffer = bufferResize;
    }else {
        console.log("TIDAK ADA FILE");
        next();
    }
    next();
}

module.exports = resize;