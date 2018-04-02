'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var a = collection_a.sort(sortNumber);
  var b = collection_b.sort(sortNumber);
  var array = [];

  for(i = 0; i < collection_a.length; i++){
    for(j = 0; j < collection_b.length; j++){
      if(collection_a[i] == collection_b[j]){
        array.push(collection_a[i]);
      }else {
        array.push(collection_a[i]);
        array.push(collection_b[j]);
      }
    }
  }

  return array;

}

module.exports = get_union;
