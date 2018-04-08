'use strict';
var single_element = function(collection){
  var result = [];
  var evenCollection = collection.filter(function(item, index, array) {
    return ((index + 1) % 2 === 0);
  });

  evenCollection.forEach(function(item, index, array) {
    if (array.indexOf(item) === array.lastIndexOf(item)) {//字符第一次出现的位置和最后一次出现的位置是否相同
      result.push(item);
    }
  });
  return result;
};
module.exports = single_element;
