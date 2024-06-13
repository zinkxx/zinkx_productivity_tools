chrome.storage.sync.get(['notes'], (result) => {
    console.log(`Saved notes: ${result.notes || 'No notes'}`);
  });
  