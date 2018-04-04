'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var array = [];
  for(var i = 0; i <= collection.length; i++){
    if (collection[i].length == undefined) {
    array.push(collection[i]);
  }
    for(var j = 0; j < collection[i].length; j++){
      array.push(collection[i][j]);
    }
  }
  return array;
}

module.exports = double_to_one;
