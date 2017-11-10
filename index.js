'use strict';

var nextInSequenceMap = {};
var defaultPrefix = 'nid';

module.exports = function (el) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPrefix;

    // initialise prefix in sequence map if necessary
    nextInSequenceMap[prefix] = nextInSequenceMap[prefix] || 0;

    if (!el.id) {
        el.setAttribute('id', prefix + '-' + nextInSequenceMap[prefix]++);
    }
};
