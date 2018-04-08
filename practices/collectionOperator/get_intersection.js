'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var array = [];
  var a = collection_a;
  var b = collection_b;
  for(var i = 0; i < b.length; i++){
    for(var j = 0; j < a.length; j++){
      if(b[i] == a[j]){
        array.push(b[i]);
      }
    }
  }
  return array;
}

module.exports = get_intersection;
