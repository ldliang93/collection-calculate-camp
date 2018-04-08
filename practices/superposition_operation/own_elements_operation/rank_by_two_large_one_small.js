'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var result = [];
  collection.sort(function(a,b){
    return a - b;
  });
  var temp = collection.length % 3;
  if(temp === 0){
    for(var i = 0; i < collection.length; i += 3){
      result.push(collection[i+1]);
      result.push(collection[i+2]);
      result.push(collection[i]);
    }
  }else {
    for(var i = 0; i < collection.length- temp; i += 3){
      result.push(collection[i+1]);
      result.push(collection[i+2]);
      result.push(collection[i]);
    }
    if(temp === 1){
      result.push(collection[collection.length-1])
    }else if (temp == 2) {
      result.push(collection[collection.length-2]);
      result.push(collection[collection.length-1])
    }
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
