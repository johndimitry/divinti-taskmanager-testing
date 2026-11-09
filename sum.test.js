const sum = require('./sum'); // Mudou de '../src/sum' para './sum'


test('Soma dois números corretamente', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Lança erro ao passar parâmetros não numéricos', () => {
  expect(() => sum(1, 'a')).toThrow('Os parâmetros devem ser números');
});
