var _ = require('lodash');
var util = require('util');

/**
 * Comp-props
 * extends an object/objects with new properties
 *
 * @param [Object|Array<Object>] The object/objects to be extended
 * @param [Object] The source for the new properties. The 'this'
 * context is set to the object that is being extended.
 *
 * @return [Object|Array<Object>] Returns the object/objects to be extended
 */
module.exports = function (objects, source) {
  function setVals(source) {
    var obj ={};

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key].call(this);
    }, this);

    return obj;
  }

  if (util.isArray(objects)) {
    objects.forEach(function (obj) {
      _.extend(obj, setVals.call(obj, source));
    });
  } else {
    _.extend(objects, setVals.call(objects, source));
  }

  return objects;
};
