const FormData = require("form-data");
const axios = require("axios");
const IMGKIT_API = process.env.IMAGEKIT_PRIVATEKEY;

function imgKit(req, res, next) {
  if (req.file) {
    let data = new FormData();
    console.log(req.file);
    data.append("file", req.file.buffer.toString("base64"));
    data.append("fileName", req.file.originalname);
    const APIkey = Buffer.from(IMGKIT_API + ":").toString("base64");

    axios({
      method: "POST",
      url: "https://upload.imagekit.io/api/v1/files/upload",
      data,
      headers: {
        ...data.getHeaders(),
        Authorization: `Basic ${APIkey}`,
      },
    })
      .then((data) => {
        req.body.image = data.data.url;
        console.log(req.body.image);
        next();
      })
      .catch((err) => {
        next({
          name: "Bad Request",
          message: "Failed to upload image",
        });
      });
  } else {
    if (req.body.image) {
      next();
    } else {
      next({
        name: "Bad Request",
        message: "Please upload image",
      });
    }
  }
}

module.exports = imgKit;
