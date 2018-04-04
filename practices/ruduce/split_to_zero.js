'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];

  while (number >= 0) {
    result.push(number);
    number = (number * 10 - interval * 10) / 10;
  }
  if (result[result.length - 1] !== 0) {
    result.push((result[result.length - 1] * 10 - interval * 10) / 10);
  }
  return result;
}

module.exports = spilt_to_zero;
