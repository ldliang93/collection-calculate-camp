'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var mapCollection = collection.map(function(item, index, array) {
    return item * 3 + 2;
  });
  var Sum = mapCollection.reduce(function(prev, cur, index, array) {
    return prev + cur;
  });
  return Sum;
}

module.exports = hybrid_operation;
