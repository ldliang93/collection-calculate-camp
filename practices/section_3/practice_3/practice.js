function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var temp;
  var count = 0;
  var collection = collection_a;
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

  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (result[i].key===object_b.value[j]) {
        var a = parseInt(result[i].count/3);
        result[i].count=result[i].count-a;
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
