'use strict';
var number_map_to_word_over_26 = function(collection){
  var array = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];
  for(var i = 0; i < collection.length; i++){
    if(collection[i] % 26 == 0){
      result.push(array[parseInt(collection[i] / 26 - 1)] + array[collection[26]]);
    }else {
      result.push(array[parseInt(collection[i] / 26)] + array[collection[i] % 26]);
    }
  }
  return result;
};

module.exports = number_map_to_word_over_26;
