// Listen for a context menu click on highlighted text
chrome.contextMenus.create({
  id: "isthereanydeal",
  title: "Look up on Isthereanydeal.com",
  contexts: ["selection"]
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "isthereanydeal") {
    const gameName = encodeURIComponent(info.selectionText.trim());
    const url = `https://isthereanydeal.com/search/?q=${gameName}`;
    chrome.tabs.create({ url });
  }
});
