'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var oddCollection = collection.filter(function(item, index, array){
    return (item%2 != 0);
  });

  var Sum = oddCollection.reduce(function(prev, cur, index, array) {
    return prev + cur;
  });

  var avg = Sum/oddCollection.length;

  return  avg;
}

module.exports = average_uneven;
