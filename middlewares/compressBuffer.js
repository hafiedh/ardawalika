const sharp = require("sharp");
const sizeof = require("object-sizeof");

async function compressBuffer(req, res, next) {
  if (req.file){
  const buffer = req.file.buffer;
  console.log("DATA BUFFER SEBELUM :",sizeof(buffer));
  console.log("DATA BUFFER BASE 64 SEBELUM :",sizeof(buffer.toString('base64')));
  // add algorithm 
  await sharp(buffer)
    .resize(200, 200)
    .jpeg({ quality: 50 })
    .toBuffer()
    .then((data) => {
      console.log("DATA BUFFER SETELAH :",sizeof(data));
      console.log("DATA BUFFER BASE 64 SETELAH :",sizeof(data.toString('base64')));
      req.file.buffer = data;
      next();
    })
    .catch((err) => next(err));
} else {
  next();
}
}
module.exports = compressBuffer;
