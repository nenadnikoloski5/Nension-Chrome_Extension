chrome.runtime.onMessage.addListener(function(request) {
	let items = document.querySelectorAll('.expando-button');

	for (let i = 0; i < items.length; i++) {
		items[i].click();
	}
});
