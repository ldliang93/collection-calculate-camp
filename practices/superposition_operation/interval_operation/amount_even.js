'use strict';

function amount_even(collection) {

  //在这里写入代码
  var evenCollection = collection.filter(function(item, index, array){
    return (item%2 == 0);
  });

  var Sum = evenCollection.reduce(function(prev, cur, index, array) {
    return prev + cur;
  });

  return  Sum;
}

module.exports = amount_even;
