document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#show').addEventListener('click', onclick);

	function onclick() {
		chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, 'hi');
		});
	}
});
