'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(element => collection_b.includes(element));//filter函数滤除不包含collection_b的元素，返回剩下的元素
}

module.exports = choose_common_elements;
