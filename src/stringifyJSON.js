// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // var str = '';

  if(Array.isArray(obj)) {
    return '[' + _.map(obj, function(item){
      return stringifyJSON(item);
    }).join(',') + ']';
  } else if (Object.prototype.toString.call(obj) === '[object Object]'){
    var results = [];
    console.log('This is an object.');
    for (var key in obj) {
      if(obj[key] === undefined || typeof (obj[key]) === 'function') {
        continue;
      }
        results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + results.join(',') + '}';
  } else if (typeof(obj) === "string") {
    return '"' + obj.toString() + '"';
  } else {
    return obj + '';
  }


};
