'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码

  for(var i = 0; i <= collection.length; i++){
    if(collection[i] == collection[i + 1]){
      collection.splice(i,1);
    }
  }
  return collection;
}

module.exports = choose_no_repeat_number;
