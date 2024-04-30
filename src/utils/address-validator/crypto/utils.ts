import base58 from './base58';

function isHexChar(c: string) {
  if (
    (c >= 'A' && c <= 'F') ||
    (c >= 'a' && c <= 'f') ||
    (c >= '0' && c <= '9')
  ) {
    return 1;
  }
  return 0;
}

function numberToHex(number: number) {
  let hex = Math.round(number).toString(16);
  if (hex.length === 1) {
    hex = '0' + hex;
  }
  return hex;
}

function toHex(arrayOfBytes: any) {
  let hex = '';
  for (let i = 0; i < arrayOfBytes.length; i++) {
    hex += numberToHex(arrayOfBytes[i]);
  }
  return hex;
}

function hexChar2byte(c: string) {
  let d = 0;
  if (c >= 'A' && c <= 'F') {
    d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
  } else if (c >= 'a' && c <= 'f') {
    d = c.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
  } else if (c >= '0' && c <= '9') {
    d = c.charCodeAt(0) - '0'.charCodeAt(0);
  }
  return d;
}
function byte2hexStr(byte: number) {
  const hexByteMap = '0123456789ABCDEF';
  let str = '';
  str += hexByteMap.charAt(byte >> 4);
  str += hexByteMap.charAt(byte & 0x0f);
  return str;
}
function byteArray2hexStr(byteArray: any) {
  let str = '';
  // eslint-disable-next-line no-var
  for (var i = 0; i < byteArray.length - 1; i++) {
    str += byte2hexStr(byteArray[i]);
  }
  str += byte2hexStr(byteArray[i]);
  return str;
}
function hexStr2byteArray(str: string) {
  const byteArray = [];
  let d = 0;
  let i = 0;
  let j = 0;
  let k = 0;

  for (i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (isHexChar(c)) {
      d <<= 4;
      d += hexChar2byte(c);
      j++;
      if (j % 2 === 0) {
        byteArray[k++] = d;
        d = 0;
      }
    }
  }
  return byteArray;
}

export default {
  hexStr2byteArray,
  byteArray2hexStr,
  base58: base58.decode,
  toHex,
};
