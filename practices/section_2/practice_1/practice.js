function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var temp;
  var count = 0;
  temp = collection[0];
  for (var i = 0; i < collection.length; i++) {

      if (temp === collection[i]) {
          count++;
      }

      if ((temp != collection[i]) || (i === collection.length - 1)) {

              result.push({
                  key: temp,
                  count: count
              })

              temp = collection[i];
              var count = 1;
      }

      if (collection[i].length > 1) {
              temp = collection[i].slice(0, 1);
              count = collection[i].slice(2,3);
              count = parseInt(count);
              result.push({
                  key: temp,
                  count: count
              })
          }
  }
  return result;
}

module.exports = count_same_elements;
