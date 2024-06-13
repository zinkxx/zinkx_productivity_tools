chrome.runtime.onInstalled.addListener(() => {
    console.log('Zinkx Productivity Tools installed.');
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
  