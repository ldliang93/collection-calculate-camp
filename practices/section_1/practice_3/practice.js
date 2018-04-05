function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  collection_b = object_b.value;
  var result = collection_a.filter(function(item,index,array){
    return (collection_b.indexOf(item) != -1);
  })
  return result;
}

module.exports = collect_same_elements;
