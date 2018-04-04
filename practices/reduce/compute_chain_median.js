'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var middle;
  var arr = collection.split('->').sort(function(a, b) {
    return a - b;
  });
  if ((arr.length) % 2 === 0) {
    middle = (Number(arr[arr.length / 2 - 1]) + Number(arr[arr.length / 2])) / 2;
  } else {
    middle = Number(arr[(arr.length - 1) / 2]);
  }
  return middle;
}

module.exports = compute_chain_median;
