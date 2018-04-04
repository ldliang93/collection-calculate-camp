'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  collection = collection.sort();
  return collection[collection.length - 1];
}

module.exports = collect_max_number;
