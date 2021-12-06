const { encode, decode } = require('../extension/translator.js');

test('encodes message', () => {
  expect(encode('encode me properly')).toBe('. -. -.-. --- -.. ./-- ./.--. .-. --- .--. . .-. .-.. -.--');
});

test('encodes message', () => {
  expect(decode('-.. . -.-. --- -.. ./-- ./.--. .-. --- .--. . .-. .-.. -.--')).toBe('DECODE ME PROPERLY');
});
