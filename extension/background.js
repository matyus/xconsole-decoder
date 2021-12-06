const contextMenu = chrome.contextMenus;

contextMenu.create({
  id: 'decode',
  title: 'Decode selected text',
  contexts: ['all']
});

contextMenu.create({
  id: 'encode',
  title: 'Encode selected text',
  contexts: ['all']
});

contextMenu.onClicked.addListener(function({ menuItemId, selectionText }, page) {
  const translated = menuItemId === "encode" ? encode(selectionText) : decode(selectionText);

  chrome.tabs.executeScript({
    code: `alert('${translated}')`
  });
});
