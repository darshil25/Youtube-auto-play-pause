chrome.windows.onFocusChanged.addListener(windowId => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // No Chrome window is focused
    chrome.tabs.query({ url: "*://www.youtube.com/watch*" }, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, { action: "pause" });
      });
    });
  } else {
    // A Chrome window is focused
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      if (tabs.length > 0 && tabs[0].url.includes('youtube.com/watch')) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "resume" });
      }
    });
  }
});
