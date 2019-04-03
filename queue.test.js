const Queue = require('./queue');


describe("test the length method", () => {

    const q = new Queue();

    test("list initially empty", () => {
        expect(q.length()).toBe(0);
    });

    test("add increases length", () => {
        q.add('test');
        expect(q.length()).toBe(1);
        q.add('test');
        expect(q.length()).toBe(2);
        q.add('test');
        expect(q.length()).toBe(3);
        q.add('test');
        expect(q.length()).toBe(4);
    });

    test("remove decreases length", () => {
        q.remove();
        expect(q.length()).toBe(3);
        q.remove();
        expect(q.length()).toBe(2);
        q.remove();
        expect(q.length()).toBe(1);
        q.remove();
        expect(q.length()).toBe(0);
        q.remove();
        expect(q.length()).toBe(0);
    });

    test("add increases length", () => {
        q.add('test');
        expect(q.length()).toBe(1);
        q.add('test');
        expect(q.length()).toBe(2);
        q.add('test');
        expect(q.length()).toBe(3);
        q.add('test');
        expect(q.length()).toBe(4);
    });

    test("remove decreases length", () => {
        q.remove();
        expect(q.length()).toBe(3);
        q.remove();
        expect(q.length()).toBe(2);
        q.remove();
        expect(q.length()).toBe(1);
        q.remove();
        expect(q.length()).toBe(0);
        q.remove();
        expect(q.length()).toBe(0);
    });

});

});