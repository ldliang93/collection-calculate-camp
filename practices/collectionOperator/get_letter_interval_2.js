'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var array = [];
  var a = number_a;
  var b = number_b;
  var cz = b - a;
  var arr = [];

  if(a < b){
    if(a <= 26 && b <= 26){
      for(i = 97 + a ; i <= 97 + b; i++){
        arr.push(fromCharCode(i));
      }
    }

    if(a <= 26 && b >26){
      for(i = 97 + a; i <= 97 + 26; i++){
        arr.push(fromCharCode(i));
      }
      for(j = 97; j<=97 + cz; j++){
        arr.push(fromCharCode(j));
      }
    }

    return array = arr;
  }

  if(a > b){
    return array = arr.reverse();
  }

  if(a == b){
    var y = a % 26;
    if(a <= 26){
      array.push(fromCharCode( 97 + a ));
    }else {
      array.push(fromCharCode( 97 ));
      array.push(fromCharCode( 97 + y ));
    }
  }


}

module.exports = get_letter_interval_2;
