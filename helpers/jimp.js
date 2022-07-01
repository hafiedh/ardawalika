const JIMP = require('jimp');
const sizeof = require("object-sizeof");

function resize(req, res, next) {
    if (req.file){
        const buffer = req.file.buffer;
        console.log("BUFFER SEBELUM DIPROSES : ", buffer);
        console.log(
        "BASE 64 ENCODED LENGTH SEBELUM DIPROSES : ",
        buffer.toString("base64").length
        );
        console.log("BUFFER SIZE SEBELUM DIPROSES : ", sizeof(buffer));
    
        // JIMP RESIZE
        JIMP.read(buffer, (err, image) => {
            if (err) throw err;
            image.resize(200, 200).getBuffer(JIMP.MIME_JPEG, (err, buffer) => {
                if (err) throw err;
                console.log("BUFFER SESUDAH DIPROSES : ", buffer);
                console.log(
                "BASE 64 ENCODED LENGTH SESUDAH DIPROSES : ",
                buffer.toString("base64").length
                );
                console.log("BUFFER SIZE SESUDAH DIPROSES : ", sizeof(buffer));
                req.file.buffer = buffer;
                next();
            });
            image.quality(50);
        });
    } else {
        next();
    }

}

module.exports = resize;