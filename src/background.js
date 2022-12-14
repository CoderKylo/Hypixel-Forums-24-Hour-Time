chrome.webNavigation.onCommitted.addListener(function(details) {
	if (!details.url.match('hypixel.net') || details.parentFrameId != -1) {
		return;
	}

		chrome.scripting.executeScript({
			target: {
				tabId: details.tabId
			},
			files: ["24-hour-time.js"],
		});
});