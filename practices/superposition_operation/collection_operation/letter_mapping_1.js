'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  collection = collection.filter(function(item,index,array){
		return (item%2===0);
	});
	var result = collection.map(function(item,index,array){
		return String.fromCharCode(item+96);
	})
	return result;
}

module.exports = even_to_letter;
