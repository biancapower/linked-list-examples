const BST = require('./bst');


describe("test the lookup method in trivial trees", () => {

    const t = new BST();

    test("lookup in empty list should return null", () => {
        expect(t.lookup("groot")).toBe(null);
        expect(t.lookup(5)).toBe(null);
    });

    test("lookup in a list with one entry", () => {
        t.insert('groot', 55);
        expect(t.lookup("groot")).toBe(55);
        expect(t.lookup(5)).toBe(null);
    });

});
