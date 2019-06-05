$_mod.installed("makeup-next-id$0.0.3", "nanoid", "2.0.3");
$_mod.def("/makeup-next-id$0.0.3/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var nanoid = require('/nanoid$2.0.3/index.browser'/*'nanoid'*/);

var sequenceMap = {};
var defaultPrefix = 'nid';
var randomPortion = nanoid(3);

module.exports = function (el) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPrefix;
  // join first prefix with random portion to create key
  var key = "".concat(prefix).concat(randomPortion); // initialise key in sequence map if necessary

  sequenceMap[key] = sequenceMap[key] || 0;

  if (!el.id) {
    el.setAttribute('id', "".concat(key, "-").concat(sequenceMap[key]++));
  }

  return el.id;
};

});