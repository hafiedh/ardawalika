const sharp = require("sharp");
const sizeof = require("object-sizeof");

async function compressBuffer(req, res, next) {
  if (req.file){
  const buffer = req.file.buffer;
  console.log("BUFFER SEBELUM DIPROSES : ", buffer);
  console.log(
    "BASE 64 ENCODED LENGTH SEBELUM DIPROSES : ",
    buffer.toString("base64").length
  );
  console.log("BUFFER SIZE SEBELUM DIPROSES : ", sizeof(buffer));

  // add algorithm 
  await sharp(buffer)
    .resize(200, 200)
    .jpeg({ quality: 50 })
    .toBuffer()
    .then((data) => {
      console.log("BUFFER SESUDAH DIPROSES : ", data);
      console.log(
        "BASE 64 ENCODED LENGTH SESUDAH DIPROSES : ",
        data.toString("base64").length
      );
      console.log("BUFFER SIZE SESUDAH DIPROSES : ", sizeof(data));
      req.file.buffer = data;
      next();
    })
    .catch((err) => next(err));
} else {
  next();
}
}
module.exports = compressBuffer;
