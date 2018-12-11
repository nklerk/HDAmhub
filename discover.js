const mdns = require("mdns-js");
const hdaApi = require("./api");

const MDNS_TIMEOUT = 3000;
const A_MATCH = 0;

module.exports = {
  discover
};

function discover() {
  return new Promise((resolve, reject) => {
    let discoveredApi = [];
    let discovered = [];

    let mdnsBrowser = mdns.createBrowser("_http._tcp");

    mdnsBrowser.on("ready", function() {
      console.log("Discovery:  Start");
      mdnsBrowser.discover();
    });

    mdnsBrowser.on("update", function(mdnsResponceData) {
      if (isMdnsDataMhub(mdnsResponceData) && isUnique(discovered, mdnsResponceData.host)) {
        discovered.push(mdnsResponceData.host);
        discoveredApi.push(new hdaApi(mdnsResponceData.host));
      }
    });

    setTimeout(() => {
      mdnsBrowser.stop();
      console.log("Discovery:  Stop");
      resolve(discoveredApi);
    }, MDNS_TIMEOUT);
  });
}

//is data from a MHUB device?
function isMdnsDataMhub(mdnsData) {
  return typeof mdnsData.txt == "object" && typeof mdnsData.txt[0] == "string" && mdnsData.txt[0].search("MHUB") == A_MATCH;
}

function isUnique(array, element) {
  return array.indexOf(element) > -1;
}
