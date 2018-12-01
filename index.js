const hdaDiscover = require("./discover");
const api = require("./api");

module.exports = {
  discover = hdaDiscover.discover,
  api
};

hdaDiscover.discover().then(r => {
  console.log(r);
});

//hdaApi.getSystemInfo("10.2.1.35").then(r => {
//  console.log(r);
//});
