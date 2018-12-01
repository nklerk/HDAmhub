const hdaDiscover = require("./discover");
const api = require("./api");

module.exports = {
  discover,
  api
};

function discover() {
  return hdaDiscover.discover();
}
