// Toggle blocking on extension icon click
chrome.action.onClicked.addListener(async () => {
  const { enabled } = await chrome.storage.local.get({ enabled: true });
  const newState = !enabled;
  await chrome.storage.local.set({ enabled: newState });

  // Update icon badge to show state
  chrome.action.setBadgeText({ text: newState ? '' : 'OFF' });
  chrome.action.setBadgeBackgroundColor({ color: '#666' });
});

// Set initial badge state on startup
chrome.runtime.onStartup.addListener(async () => {
  const { enabled } = await chrome.storage.local.get({ enabled: true });
  chrome.action.setBadgeText({ text: enabled ? '' : 'OFF' });
});

chrome.runtime.onInstalled.addListener(async () => {
  const { enabled } = await chrome.storage.local.get({ enabled: true });
  chrome.action.setBadgeText({ text: enabled ? '' : 'OFF' });
});
