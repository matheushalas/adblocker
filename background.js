//filtro de url para bloquear
defaultFilters = [
    "*://*.reddit.com/*",
    "*://*.youtube.com/*",
    "*://*.wallpapershome.com/*",
] 

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)

