var nextId = require('../index.js');

function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

describe("makeup-next-id", function() {
    var testEls;

    describe('when nextId is called on elements with no id, passing no prefix', function() {
        beforeAll(function() {
            document.body.innerHTML = '<div></div><div></div><div></div>';
            testEls = nodeListToArray(document.querySelectorAll('div'));
            nextId(testEls[0]);
            nextId(testEls[1]);
            nextId(testEls[2]);
        });

        it('should set nid-0 on first element', function() {
            expect(testEls[0].id).toEqual('nid-0');
        });

        it('should set nid-1 on second element', function() {
            expect(testEls[1].id).toEqual('nid-1');
        });

        it('should set nid-2 on third element', function() {
            expect(testEls[2].id).toEqual('nid-2');
        });
    });

    describe('when nextId is called on elements with no id, passing a prefix', function() {
        beforeAll(function() {
            document.body.innerHTML = '<div></div><div></div><div></div>';
            testEls = nodeListToArray(document.querySelectorAll('div'));

            nextId(testEls[0], 'widget');
            nextId(testEls[1], 'widget');
            nextId(testEls[2], 'widget');
        });

        it('should set widget-0 on first element', function() {
            expect(testEls[0].id).toEqual('widget-0');
        });

        it('should set widget-1 on second element', function() {
            expect(testEls[1].id).toEqual('widget-1');
        });

        it('should set widget-2 on third element', function() {
            expect(testEls[2].id).toEqual('widget-2');
        });
    });

    describe('when nextId is called on elements with existing id', function() {
        beforeAll(function() {
            document.body.innerHTML = '<div id="foo-0"></div><div id="foo-1"></div><div id="foo-2"></div>';
            testEls = nodeListToArray(document.querySelectorAll('div'));

            nextId(testEls[0]);
            nextId(testEls[1]);
            nextId(testEls[2]);
        });

        it('should maintain foo-0 on first element', function() {
            expect(testEls[0].id).toEqual('foo-0');
        });

        it('should maintain foo-1 on second element', function() {
            expect(testEls[1].id).toEqual('foo-1');
        });

        it('should maintain foo-2 on third element', function() {
            expect(testEls[2].id).toEqual('foo-2');
        });
    });
});
