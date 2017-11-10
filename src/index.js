'use strict';

const nextInSequenceMap = {};
const defaultPrefix = 'nid';

module.exports = function(el, prefix = defaultPrefix) {
    // initialise prefix in sequence map if necessary
    nextInSequenceMap[prefix] = nextInSequenceMap[prefix] || 0;

    if (!el.id) {
        el.setAttribute('id', `${prefix}-${nextInSequenceMap[prefix]++}`);
    }
};
