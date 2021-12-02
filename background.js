const contextMenu = chrome.contextMenus;

contextMenu.create({
  id: 'decode',
  title: 'Decode: %s',
  contexts: ['all']
});

const MORSE_CODE = {
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

function translate(selectionText) {
  const translatedWords = [];
  const words = selectionText.split('/');

  for (var i = 0; i < words.length; i++) {
    const word = words[i].split(' ');
    const translatedWord = [];

    for (var character = 0; character < word.length; character++) {
      translatedWord.push(MORSE_CODE[word[character]]);
    }

    translatedWords.push(translatedWord.join(''));
  }

  return translatedWords.join(' ');
}


contextMenu.onClicked.addListener(function({ menuItemId, selectionText }, page) {
  if (menuItemId === 'decode') {
    const translated = translate(selectionText);

    chrome.tabs.executeScript({
      code: `alert('${translated}!')`
    });
  }
});
