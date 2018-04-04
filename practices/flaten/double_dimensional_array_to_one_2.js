'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var array = [];
  for(var i = 0; i < collection.length; i++){
    for(var j = 0; j < collection[i].length; j++){
      array.push(collection[i][j]);
    }
  }
  return Array.from(new Set(array));
}

module.exports = double_to_one;
