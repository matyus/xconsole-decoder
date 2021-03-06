// Credit where it's due, MORSE CODE mappings:
// https://stackoverflow.com/questions/43726344/js-decoding-morse-code
const DECODE = {
  "-----":"0",
  ".----":"1",
  "..---":"2",
  "...--":"3",
  "....-":"4",
  ".....":"5",
  "-....":"6",
  "--...":"7",
  "---..":"8",
  "----.":"9",
  ".-":"A",
  "-...":"B",
  "-.-.":"C",
  "-..":"D",
  ".":"E",
  "..-.":"F",
  "--.":"G",
  "....":"H",
  "..":"I",
  ".---":"J",
  "-.-":"K",
  ".-..":"L",
  "--":"M",
  "-.":"N",
  "---":"O",
  ".--.":"P",
  "--.-":"Q",
  ".-.":"R",
  "...":"S",
  "-":"T",
  "..-":"U",
  "...-":"V",
  ".--":"W",
  "-..-":"X",
  "-.--":"Y",
  "--..":"Z",
  "-.-.--":"!",
  ".-.-.-":".",
  "--..--":","
};

const ENCODE = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "!": "-.-.--",
  ".": ".-.-.-",
  ":": "--..--",
};

function decode(selectionText) {
  return selectionText
    .split('/')
    .map(word => word.split(' ').map(character => DECODE[character.toUpperCase()]).join(''))
    .join(' ');
}

function encode(selectionText) {
  return selectionText
    .split(' ')
    .map(word => word.split('').map(character => ENCODE[character.toUpperCase()]).join(' '))
    .join('/');
}

if (typeof module === 'object') module.exports = { decode, encode };
