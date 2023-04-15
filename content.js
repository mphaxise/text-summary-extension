function extractText() {
  const bodyText = document.body.innerText;
  return bodyText;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'summarize') {
    const text = extractText();
    sendResponse({ text });
  }
});
