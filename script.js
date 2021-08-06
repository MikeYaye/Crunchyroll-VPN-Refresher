var browser = browser ?? chrome;

window.onload = function () {
	// Clone existing menu item and put it at the first position
    const existingItem = document.querySelector("#header_userpanel_beta > ul > li.userpanel-item.queue")
    const parent = existingItem.parentElement;
    const newItem = parent.insertBefore(existingItem.cloneNode(true), parent.childNodes[0]);

    // Modify new menu item
    newItem.getElementsByClassName("caption")[0].innerText = "Refresh";
    newItem.getElementsByTagName("svg")[0].innerHTML = '<svg id="cr_bookmark_header" viewBox="0 0 48 48"></svg>'

	// Remove existing click events and add new click listener
    newItem.childNodes[1].removeAttribute("href")
    newItem.childNodes[1].addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        reloadAndClearSessionCookie("session_id");
    }, true);
}

function reloadAndClearSessionCookie(name) {
    browser.runtime.sendMessage({ name, "url": location.href});
    location.reload()
}

