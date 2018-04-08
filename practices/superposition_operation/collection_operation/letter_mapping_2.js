'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var avg = 0;
  var sum = 0
  for(var i = 0; i <collection.length; i++){
    sum += collection[i];
  }
  avg = Math.ceil(sum/collection.length);

  return String.fromCharCode(avg + 96);

}

module.exports = average_to_letter;
