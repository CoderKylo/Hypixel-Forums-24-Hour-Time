chrome.webNavigation.onCommitted.addListener(function(details) {
	if (!details.url.match('hypixel.net') || details.parentFrameId != -1) {
		return;
	}

	if (details.url.match("hypixel.net/threads/") || details.url.match("hypixel.net/members") || details.url.match("hypixel.net/whats-new/profile-posts") || details.url.match("hypixel.net/conversations/")) {
		chrome.scripting.executeScript({
			target: {
				tabId: details.tabId
			},
			files: ["24-hour-time.js"],
		});
	}
});