function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var lastresult = [];
  var temp = collection[0];;
  var count = 0;

  for (var i = 0; i < collection.length; i++) {

      if (temp === collection[i]) {
          count++;
      }

      if (temp != collection[i]) {
              result.push({
                  key: temp,
                  count: count
              })

              temp = collection[i];
              var count = 1;
      }

      if (collection[i].length > 2) {
              temp = collection[i].slice(0, 1);
              count = collection[i].slice(2);
              count = parseInt(count);
              result.push({
                  key: temp,
                  count: count
              });
              count = 0;
          }
  }

  var name = result[0].key;
  var summary = result[0].count;

  for (var j = 1; j < result.length; j++) {

      if (name === result[j].key) {
          summary += result[j].count;
      }

      if (name != result[j].key) {
          lastresult.push({
              name: name,
              summary: summary
          });
          name = result[j].key;
          summary = result[j].count;
      }

  }
  lastresult.push({
      name: result[result.length - 1].key,
      summary: result[result.length - 1].count
  })
  return lastresult;
}

module.exports = count_same_elements;
