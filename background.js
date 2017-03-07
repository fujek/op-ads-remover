function checkURL(tab){
	if (tab.url.indexOf('poczta.onet.pl') > -1) {
		chrome.tabs.executeScript(null, {
			file: "jquery.js"
		}, function() {
			chrome.tabs.executeScript(null, {
				code: '$(".commerceStatus").parent().parent().parent().find(":checkbox").click();document.getElementById("mails-actions-inbox-trash").click()'
			});
		});
	}
}
chrome.browserAction.onClicked.addListener(checkURL);