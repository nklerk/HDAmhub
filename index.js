const hdaDiscover = require("./discover");
const api = require("./api");
const uControl = require("./ucontrol");

function discover() {
  return hdaDiscover.discover();
}

function uControlMapping() {
  return uControl.mapping();
}

module.exports = {
  discover,
  api,
  uControlMapping
};
