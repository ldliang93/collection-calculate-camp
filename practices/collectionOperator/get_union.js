'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for(var i = 0; i < collection_a.length; i++){
    for(var j = 0; j < collection_b.length; j++){
      if(collection_a[i] == collection_b[j]){
        collection_b.splice(j,1);
      }
    }
  }
  for(var k = 0; k < collection_b.length; k++){
    collection_a.push(collection_b[k]);
  }

  return collection_a;

}

module.exports = get_union;
