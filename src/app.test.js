const { remainingTime } = require('./app');

test('remainingTime returns the correct remaining time', () => {
    const uncontainmentDate = new Date(2020, 5, 9, 9);
    const remaining = remainingTime( uncontainmentDate );
    expect( remaining ).toBe(2);
});
