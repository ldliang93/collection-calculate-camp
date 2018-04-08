'use strict';
var calculate_median = function(collection){
  var median;
  var evenArr = collection.filter(function(item, index, array) {
    return ((index + 1) % 2 === 0);
  });
  if (evenArr.length % 2 != 0) {
    median = evenArr[(evenArr.length - 1) / 2];
  } else {
    median = (evenArr[evenArr.length / 2] + evenArr[evenArr.length / 2 - 1]) / 2;
  }
  return median;
};
module.exports = calculate_median;
