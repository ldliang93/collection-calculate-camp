'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  collection = collection.sort().reverse();
  return collection[collection.length - 1];
}

module.exports = collect_min_number;
