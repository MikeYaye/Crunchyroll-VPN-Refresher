var browser = browser ?? chrome;

browser.runtime.onMessage.addListener( function(message,sender,sendResponse) {
    browser.cookies.remove({
        url: message.url,
        name: message.name
    });
});
