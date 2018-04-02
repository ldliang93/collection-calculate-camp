'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var a = number_a;
  var b = number_b;
  var array = [];

  if(a < b){
    for(i = a; i <= b; i++){
      array.push(i);
    }
    return array;
  }

  if(a > b){
    for(i = a; i >= b; i--){
      array.push(i);
    }
    return array;
  }

  if(a == b){
    array.push(a);
    return array;
  }
}

module.exports = get_integer_interval;
