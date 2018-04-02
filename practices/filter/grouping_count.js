'use strict';

function grouping_count(collection) {

  //在这里写入代码
  collection = collection.sort(sortNumber);//排序
  var count = 1;
  var arr = [];
  var result;

  for( var i = 0; i <= collection.length; i++){
    if(collection[i] == collection[i + 1]){
      count ++;
      arr.push(collection[i] + ":" + count);
    }else{
      count = 1;
    }
  }
  result = "{" + arr + "}";
}

module.exports = grouping_count;
