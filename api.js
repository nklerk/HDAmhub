const http = require("http.min");

function API(host) {
  this.host = host;
}

API.prototype.sendProntoHex = function sendProntoHex(io, prontoHex) {
  return apiPost(this.host, `command/irpass/${io}/`, `{"irdata":"${prontoHex}"} `).then(r => {
    return r;
  });
};

API.prototype.executeUcontrolCommand = function executeUcontrolCommand(io, commandNumber) {
  return apiGet(this.host, `command/ir/${io}/${commandNumber}/`).then(r => {
    return r;
  });
};

API.prototype.executeSequence = function executeSequence(sequenceId) {
  return apiGet(this.host, `control/sequence/​${sequenceId}/`).then(r => {
    return r;
  });
};

API.prototype.groupUnMute = function groupUnMute(groupId) {
  return apiGet(this.host, `control/mutegroup/​${groupId}/false/`).then(r => {
    return r;
  });
};

API.prototype.groupMute = function groupMute(groupId) {
  return apiGet(this.host, `control/mutegroup/​${groupId}/true/`).then(r => {
    return r;
  });
};

API.prototype.groupVolume = function groupVolume(groupId, volume) {
  return apiGet(this.host, `control/group/volume/set/${groupId}/${volume}/`).then(r => {
    return r;
  });
};

API.prototype.groupRemoveZone = function groupRemoveZone(groupId, zoneArray) {
  let data = { data: { zones: zoneArray } };
  return apiPost(this.host, `control/group/${groupId}/delete`, data).then(r => {
    return r;
  });
};

API.prototype.groupAddZone = function groupAddZone(groupId, zoneArray) {
  let data = { data: { zones: zoneArray } };
  return apiPost(this.host, `control/group/${groupId}/add`, data).then(r => {
    return r;
  });
};

API.prototype.deleteGroup = function deleteGroup(groupId) {
  return apiGet(this.host, `control/group/delete/${groupId}/`).then(r => {
    return r;
  });
};

API.prototype.createGroup = function createGroup(groupLabel) {
  return apiGet(this.host, `control/group/create/${groupLabel}/`).then(r => {
    return r;
  });
};

API.prototype.zoneUnMute = function zoneUnMute(zone) {
  return apiGet(this.host, `control/mute/zone/${zone}/false/`).then(r => {
    return r;
  });
};

API.prototype.zoneMute = function zoneMute(zone) {
  return apiGet(this.host, `control/mute/zone/${zone}/true/`).then(r => {
    return r;
  });
};

API.prototype.outputUnMute = function outputUnMute(output) {
  return apiGet(this.host, `control/mute/${output}/false/`).then(r => {
    return r;
  });
};

API.prototype.outputMute = function outputMute(output) {
  return apiGet(this.host, `control/mute/${output}/true/`).then(r => {
    return r;
  });
};

API.prototype.zoneVolume = function zoneVolume(zone, volume) {
  return apiGet(this.host, `control/volume/zone/${zone}/${volume}/`).then(r => {
    return r;
  });
};

API.prototype.outputVolume = function outputVolume(output, volume) {
  return apiGet(this.host, `control/volume/${output}/${volume}/`).then(r => {
    return r;
  });
};

API.prototype.switchZoneInput = function switchZoneInput(zone, input) {
  return apiGet(this.host, `control/switch/zone/${zone}/${input}/`).then(r => {
    return r;
  });
};

API.prototype.switchOutputInput = function switchOutputInput(output, input) {
  return apiGet(this.host, `control/switch/${output}/${input}/`).then(r => {
    return r;
  });
};

API.prototype.getSequences = function getSequences() {
  return apiGet(this.host, `data/202/`).then(r => {
    return r;
  });
};

API.prototype.getUControlState = function getUControlState(port) {
  return apiGet(this.host, `data/201/${port}/`).then(r => {
    return r;
  });
};

API.prototype.getUControlStatus = function getUControlStatus() {
  return apiGet(this.host, `data/201/`).then(r => {
    return r;
  });
};

API.prototype.getZoneState = function getZoneState(zId) {
  return apiGet(this.host, `data/200/${zId}/`).then(r => {
    return r;
  });
};

API.prototype.getStatus = function getStatus() {
  return apiGet(this.host, `data/200/`).then(r => {
    return r;
  });
};

API.prototype.getGroups = function getGroups() {
  return apiGet(this.host, `data/103/`).then(r => {
    return r;
  });
};

API.prototype.getZones = function getZones() {
  return apiGet(this.host, `data/102/`).then(r => {
    return r;
  });
};

API.prototype.getSystemInfoStack = function getSystemInfoStack() {
  return apiGet(this.host, `data/101/`).then(r => {
    return r;
  });
};

API.prototype.getSystemInfo = function getSystemInfo() {
  return apiGet(this.host, `data/100/`).then(r => {
    return r;
  });
};

API.prototype.getPowerState = function getPowerState() {
  return apiGet(this.host, `data/0/`).then(r => {
    return apiGet(this.host, `data/0/`);
  });
};

API.prototype.identify = function identify() {
  return apiGet(this.host, `identify/`).then(r => {
    return r;
  });
};

API.prototype.powerOn = function powerOn() {
  return apiGet(this.host, `power/1/`).then(r => {
    return r;
  });
};

API.prototype.powerOff = function powerOff() {
  return apiGet(this.host, `power/0/`).then(r => {
    return r;
  });
};

API.prototype.reboot = function reboot() {
  return apiGet(this.host, `reboot/2/`).then(r => {
    return r;
  });
};

API.prototype.powerCycle = function powerCycle() {
  return apiGet(this.host, `reboot/1/`).then(r => {
    return r;
  });
};

function apiGet(mHubHost, api) {
  return http
    .json(`http://${mHubHost}/api/${api}`)
    .then(r => {
      return r.data;
    })
    .catch(e => {
      console.log(e);
    });
}

function apiPost(mHubHost, api, data) {
  return http
    .post(`http://${mHubHost}/api/${api}`, { data })
    .then(r => {
      try {
        return JSON.parse(r.data).data;
      } catch (e) {}
    })
    .catch(e => {
      console.log(e);
    });
}

module.exports = API;
