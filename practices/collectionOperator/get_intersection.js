'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var array = [];
  var a = collection_a;
  var b = collection_b;
  for(i = 0; i < a.length; i++){
    for(j = 0; j < b.length; j++){
      if(a[i] == b[j]){
        array.push(a[i]);
      }
    }
  }
  return array;
}

module.exports = get_intersection;
