'use strict';
var even_asc_odd_desc = function(collection){
  var result=[];
  var evenCollection = collection.filter(function(item, index, array){
    return (item%2 === 0);
  });
  var oddCollection = collection.filter(function(item, index, array){
    return (item%2 != 0);
  });
  evenCollection.sort(function(a,b){
    return a - b;
  });
  oddCollection.sort(function(a,b){
    return b - a;
  });
  evenCollection.forEach(function(item,index,array){
		result.push(item);
	});
  oddCollection.forEach(function(item,index,array){
		result.push(item);
	});  
  return result;
};
module.exports = even_asc_odd_desc;
