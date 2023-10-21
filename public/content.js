/* eslint-disable */

// Get the current tab's URL.
const currentUrl = window.location.href;

// Create a URL object to parse the URL.
const url = new URL(currentUrl);

// Get the domain name (e.g., "example.com") from the URL.
const domain = url.hostname;
function addHeader() {
  const header = document.createElement("div");
  header.innerHTML = `
  <div id="visited-header" style="margin-left:250px;width:20vw;z-index:9999;position:fixed;padding:10px;text-align:center;">
  <h1 style="color:red;font-size:18px;">This site is visited already</h1>
</div>

  `;
  document.body.insertBefore(header, document.body.firstChild);
}
chrome.storage.local.get({ visitedSites: [] }, function (result) {
  const visitedSites = result.visitedSites;

  // Check if the domain is not in the visitedSites array before adding it.
  if (!visitedSites.includes(domain)) {
    visitedSites.push(domain);

    chrome.storage.local.set({ visitedSites }, function () {
      console.log(`${domain} added to visited sites.`);
    });
  } else {
    const visitedSites = result.visitedSites;
    if (visitedSites.includes(domain)) {
      console.log(`${domain} is already in visited sites.`);
      addHeader();
    }
  }
});
