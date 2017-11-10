function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

describe("makeup-next-id", function() {
    var nextId = require('../index.js');

    describe('when module is imported', function() {
        it("module should not be undefined", function() {
            expect(nextId).not.toEqual(undefined);
        });
    });

    describe('when nextId is called on elements with no id, passing no prefix', function() {
        var testEls;

        beforeAll(function() {
            document.body.innerHTML = '<div></div><div></div><div></div>';
            testEls = nodeListToArray(document.querySelectorAll('div'));
        });

        it("first element should have id=nid-0", function() {
            nextId(testEls[0]);
            expect(testEls[0].id).toEqual('nid-0');
        });

        it("second element should have id=nid-1", function() {
            nextId(testEls[1]);
            expect(testEls[1].id).toEqual('nid-1');
        });

        it("first element should have id=nid-2", function() {
            nextId(testEls[2]);
            expect(testEls[2].id).toEqual('nid-2');
        });
    });

    describe('when nextId is called on elements with no id, passing a prefix', function() {
        var testEls;

        beforeAll(function() {
            document.body.innerHTML = '<div></div><div></div><div></div>';
            testEls = nodeListToArray(document.querySelectorAll('div'));
        });

        it("first element should have id=widget-0", function() {
            nextId(testEls[0], 'widget');
            expect(testEls[0].id).toEqual('widget-0');
        });

        it("second element should have id=widget-1", function() {
            nextId(testEls[1], 'widget');
            expect(testEls[1].id).toEqual('widget-1');
        });

        it("first element should have id=widget-2", function() {
            nextId(testEls[2], 'widget');
            expect(testEls[2].id).toEqual('widget-2');
        });
    });

    describe('when nextId is called on elements with existing id', function() {
        var testEls;

        beforeAll(function() {
            document.body.innerHTML = '<div id="foo-0"></div><div id="foo-1"></div><div id="foo-2"></div>';
            testEls = nodeListToArray(document.querySelectorAll('div'));
        });

        it("first element should have id=foo-0", function() {
            nextId(testEls[0]);
            expect(testEls[0].id).toEqual('foo-0');
        });

        it("second element should have id=foo-1", function() {
            nextId(testEls[1]);
            expect(testEls[1].id).toEqual('foo-1');
        });

        it("first element should have id=foo-2", function() {
            nextId(testEls[2]);
            expect(testEls[2].id).toEqual('foo-2');
        });
    });
});
