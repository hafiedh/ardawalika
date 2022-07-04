function toAGBR(image) {
  return scan(image, 0, 0, image.bitmap.width, image.bitmap.height, function(
    x,
    y,
    index
  ) {
    const red = this.bitmap.data[index + 0];
    const green = this.bitmap.data[index + 1];
    const blue = this.bitmap.data[index + 2];
    const alpha = this.bitmap.data[index + 3];

    this.bitmap.data[index + 0] = alpha;
    this.bitmap.data[index + 1] = blue;
    this.bitmap.data[index + 2] = green;
    this.bitmap.data[index + 3] = red;
  }).bitmap;
}

function fromAGBR(bitmap) {
  return scan({ bitmap }, 0, 0, bitmap.width, bitmap.height, function(
    x,
    y,
    index
  ) {
    const alpha = this.bitmap.data[index + 0];
    const blue = this.bitmap.data[index + 1];
    const green = this.bitmap.data[index + 2];
    const red = this.bitmap.data[index + 3];

    this.bitmap.data[index + 0] = red;
    this.bitmap.data[index + 1] = green;
    this.bitmap.data[index + 2] = blue;
    this.bitmap.data[index + 3] = bitmap.is_with_alpha ? alpha : 0xff;
  }).bitmap;
}

const decode = data => fromAGBR(BMP.decode(data));
const encode = image => BMP.encode(toAGBR(image)).data;

export default () => ({
  mime: { [MIME_TYPE]: ['bmp'] },

  constants: {
    MIME_BMP: MIME_TYPE,
    MIME_X_MS_BMP: MIME_TYPE_SECOND
  },

  decoders: {
    [MIME_TYPE]: decode,
    [MIME_TYPE_SECOND]: decode
  },

  encoders: {
    [MIME_TYPE]: encode,
    [MIME_TYPE_SECOND]: encode
  }
});


// example:
// function donutJGD() {
//     //Pallet  RRGGBBAA
//     const _ = 0xFFFFFF00,
//         i = 0xFF880088,
//         X = 0xFF8800FF;
//     return {
//         width: 10, height: 10,
//         data: [
//             _,_,_,_,_,_,_,_,_,_,
//             _,_,_,i,X,X,i,_,_,_,
//             _,_,X,X,X,X,X,X,_,_,
//             _,i,X,X,i,i,X,X,i,_,
//             _,X,X,i,_,_,i,X,X,_,
//             _,X,X,i,_,_,i,X,X,_,
//             _,i,X,X,i,i,X,X,i,_,
//             _,_,X,X,X,X,X,X,_,_,
//             _,_,_,i,X,X,i,_,_,_,
//             _,_,_,_,_,_,_,_,_,_
//         ]
//     };
// }

// encode function:
// function encode(bitmap) {
//   const jgd = { width: bitmap.width, height: bitmap.height, data: [] };

//   for (let row = 0; row < bitmap.height; row++) {
//     for (let col = 0; col < bitmap.width; col++) {
//       const i = (bitmap.width * row + col) << 2;
//       const r = bitmap.data[i + 0];
//       const g = bitmap.data[i + 1];
//       const b = bitmap.data[i + 2];
//       const a = bitmap.data[i + 3];
//       const color =
//         ((((r & 0xff) << 24) >>> 0) |
//           ((g & 0xff) << 16) |
//           ((b & 0xff) << 8) |
//           (a & 0xff)) >>>
//         0;
//       jgd.data.push(color);
//     }
//   }

//   return jgd;
// }

