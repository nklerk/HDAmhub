const hdaDiscover = require("./discover");
const api = require("./api");
const uControl = require("./ucontrol");

module.exports = {
  discover,
  api,
  uControlMapping
};

function discover() {
  return hdaDiscover.discover();
}

function uControlMapping() {
  return uControl.mapping();
}
