// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var resultArray = [];

  var recurse = function (node) {
    var node = node || document.body;
    //if node classList contains className, push to resultArray
    if ( _.contains(node.classList, className) ) {
      resultArray.push(node)
    }
    _.each(node.childNodes, function (node) {
      recurse(node);
    });
  };

  recurse();
  console.log(resultArray)

  return resultArray;
};
