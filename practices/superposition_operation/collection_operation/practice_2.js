'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var oddCollection = collection.filter(function(item, index, array){
    return (item%2 != 0);
  });

  var mapCollection = oddCollection.map(function(item, index, array) {
    return item * 3 + 2;
  });

  return mapCollection;
}

module.exports = hybrid_operation_to_uneven;
