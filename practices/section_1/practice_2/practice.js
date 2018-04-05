function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  collection_b = [].concat.apply([],collection_b);
  var result = collection_a.filter(function(item,index,array){
    return (collection_b.indexOf(item) != -1);
  })
  return result;
}

module.exports = collect_same_elements;
