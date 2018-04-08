'use strict';

function median_to_letter(collection) {
  //在这里写入代码

  let middle;
    let codeFirst;
    let codeSecond;
    let code;
    if (collection.length % 2 === 0) {
      middle = ((collection[collection.length / 2 - 1]) + (collection[collection.length / 2])) / 2;
      middle = Math.ceil(middle);
    } else {
      middle = collection[(collection.length - 1) / 2];
    }
    let i = middle + 96;
  if (i > 122) {
      let indexFirst = parseInt((i - 122) / 27) + 97;
      let indexSecond = parseInt((i - 123) % 27) + 97;
      codeFirst = String.fromCharCode(indexFirst);
      if (indexSecond === 123) {
        codeSecond = "a";
      } else {
        codeSecond = String.fromCharCode(indexSecond);
      }
      code = codeFirst + codeSecond;
    } else {
      code = String.fromCharCode(i);
    }
    return code;
}

module.exports = median_to_letter;
