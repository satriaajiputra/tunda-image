const { ImageFill } = require('scenegraph');
const DialogHelper = require('xd-dialog-helper');

function applyImage(selection, url) {
  if (selection.items.length) {
    return downloadImage(selection, url);
  } else {
    console.log('Please select a shape to apply the downloaded image.');
  }
}

async function downloadImage(selection, url) {
  try {
    const photoUrl = url;
    const photoObj = await xhrBinary(photoUrl);
    const photoObjBase64 = await base64ArrayBuffer(photoObj);
    applyImagefill(selection, photoObjBase64);
  } catch (err) {
    console.log('error');
    console.log(err.message);
  }
}

function xhrBinary(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.onload = () => {
      if (req.status === 200) {
        try {
          const arr = new Uint8Array(req.response);
          resolve(arr);
        } catch (err) {
          reject('Couldnt parse response. ${err.message}, ${req.response}');
        }
      } else {
        reject('Request had an error: ${req.status}');
      }
    };
    req.onerror = reject;
    req.onabort = reject;
    req.open('GET', url, true);
    req.responseType = 'arraybuffer';
    req.send();
  });
}

function applyImagefill(selection, base64) {
  const imageFill = new ImageFill(`data:image/jpeg;base64,${base64}`);
  selection.items[0].fill = imageFill;
}

function base64ArrayBuffer(arrayBuffer) {
  let base64 = '';
  const encodings =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  const bytes = new Uint8Array(arrayBuffer);
  const byteLength = bytes.byteLength;
  const byteRemainder = byteLength % 3;
  const mainLength = byteLength - byteRemainder;

  let a;
  let b;
  let c;
  let d;
  let chunk;

  // Main loop deals with bytes in chunks of 3
  for (let i = 0; i < mainLength; i += 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
    d = chunk & 63; // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder === 1) {
    chunk = bytes[mainLength];

    a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3) << 4; // 3   = 2^2 - 1

    base64 += `${encodings[a]}${encodings[b]}==`;
  } else if (byteRemainder === 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

    a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15) << 2; // 15    = 2^4 - 1

    base64 += `${encodings[a]}${encodings[b]}${encodings[c]}=`;
  }

  return base64;
}

async function showModal(selection) {
  try {
    const result = await DialogHelper.showDialog(
      'tunda-image',
      'Tunda Image',
      [
        {
          type: DialogHelper.HR,
          id: 'hr'
        },
        {
          type: DialogHelper.TEXT,
          id: 'welcome',
          label: 'Fill your rect with an image from your image url here'
        },
        {
          type: DialogHelper.TEXT_INPUT,
          id: 'url',
          label: 'http://...',
          value: ''
        }
      ],
      {
        okButtonText: 'Tunda Image'
      }
    );

    // now, result is the object containing all the values
    if (selection.items.length) {
      return downloadImage(selection, result.url);
    } else {
      console.log('Please select a shape to apply the downloaded image.');
    }
  } catch (e) {
    // The dialog got canceled by the user.
  }
}

module.exports.commands = {
  showModal: showModal
};
