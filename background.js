/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

var browser = browser ?? chrome;

browser.runtime.onMessage.addListener( function(message,sender,sendResponse) {
    browser.cookies.remove({
        url: message.url,
        name: message.name
    });
});
