'use strict';

const nanoid = require('nanoid');
const sequenceMap = {};
const defaultPrefix = 'nid';
const randomPortion = nanoid(3);

module.exports = function(el, prefix = defaultPrefix) {
    // join first prefix with random portion to create key
    const key = `${prefix}${randomPortion}`;

    // initialise key in sequence map if necessary
    sequenceMap[key] = sequenceMap[key] || 0;

    if (!el.id) {
        el.setAttribute('id', `${key}-${sequenceMap[key]++}`);
    }

    return el.id;
};
