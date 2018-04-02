'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var array = [];
  var a = number_a;
  var b = number_b;

  if(a < b){

      for(i = 97 + a ; i <= 97 + b; i++){
        array.push(fromCharCode(i));
      }
    return array;
  }

  if(a > b){
    return array.reverse();
  }

  if(a == b){
      array.push(fromCharCode(97 + a));
    }

}

module.exports = get_letter_interval;
