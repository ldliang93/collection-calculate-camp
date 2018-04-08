'use strict';
function one_add_next_multiply_three(collection){

  var result = [];
  for(var i = 0; i < (collection.length - 1); i++){
    var temp = collection[i] + collection[i+1];
    temp = temp * 3
    result.push(temp);
  }
  return result;
}
module.exports = one_add_next_multiply_three;
