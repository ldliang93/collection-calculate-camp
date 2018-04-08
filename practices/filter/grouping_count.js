'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = [];
  var temp = collection[0];
  var count = 0;
  collection.sort(function(a,b){
    return a-b;
  }); 
  for (var i = 0; i < collection.length; i++) {
    if (temp === collection[i]) {
      count++;
    }
    if ((temp != collection[i]) || (i === collection.length - 1)) {
      result.push(temp + ":" + count);
      temp = collection[i];
      count = 1;
    }
  }
  result = "{" + result + "}";
  result = eval("(" + result + ")"); //暂时没找到一个好的方法代替，就用eval代替了。
  return result;
}

module.exports = grouping_count;
