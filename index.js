var recipes = {};


function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
var obj = {[key]: value}
return obj
}

function deleteFromObjectByKey(object, key) {
  var obj = {[key]: value};
  var newObj = delete obj[key];
}
