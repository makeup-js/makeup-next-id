'use strict';

const sequenceMap = {};
const defaultPrefix = 'nid';

module.exports = function(el, prefix = defaultPrefix) {
    // prevent empty string
    const _prefix = (prefix === '') ? defaultPrefix : prefix;

    // initialise prefix in sequence map if necessary
    sequenceMap[_prefix] = sequenceMap[_prefix] || 0;

    if (!el.id) {
        el.setAttribute('id', `${_prefix}-${sequenceMap[_prefix]++}`);
    }
};
