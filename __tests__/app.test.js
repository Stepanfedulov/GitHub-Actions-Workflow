const { isEvenDay } = require('../app');

test('Проверка чётности дня', () => {
    const today = new Date().getDate();
    expect(isEvenDay()).toBe(today % 2 === 0);
});