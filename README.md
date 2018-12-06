NodeJS Module for HD Anywhere MHUB

Product site: http://hdanywhere.co.uk/

#Installation:

`npm install https://github.com/nklerk/HDAmhub.git --save`

#Code Examples

## Common commands:

```javascript
const hda = require("hdamhub");

// Hostname, mdns name or IP address.
const hostname = 192.168.1.20
const api = new hda.api(hostname);

//power on
api.powerOn();

//Power off
api.powerOff();

//switch Output, Input
api.switchOutputInput("c", "2"); //(Output, Input)
```

## Discovery

```javascript
const hda = require("hdamhub");
mhubs = await hda.discover();
```

or

```javascript
const hda = require("hdamhub");
hda.discover().then(mhubs => {
  //mhubs []
});
```

## uControll

```javascript
let commandNumber = hda.uControlMapping()["3D"];
let io = "a"; api.executeUcontrolCommand(io, commandNumber):
```

## API Functions.

```javascript
api.sendProntoHex(io, prontoHex);
api.executeUcontrolCommand(io, commandNumber);
api.executeSequence(sequenceId);
api.groupUnMute(groupId);
api.groupMute(groupId);
api.groupVolume(groupId, volume);
api.groupRemoveZone(groupId, zoneArray);
api.groupAddZone(groupId, zoneArray);
api.deleteGroup(groupId);
api.createGroup(groupLabel);
api.zoneUnMute(zone);
api.zoneMute(zone);
api.outputUnMute(output);
api.outputMute(output);
api.zoneVolume(zone, volume);
api.outputVolume(output, volume);
api.switchZoneInput(zone, input);
api.switchOutputInput(output, input);
api.getSequences();
api.getUControlState(port);
api.getUControlStatus();
api.getZoneState(zId);
api.getStatus();
api.getGroups();
api.getZones();
api.getSystemInfoStack();
api.getSystemInfo();
api.getPowerState();
api.identify();
api.powerOn();
api.powerOff();
api.reboot();
api.powerCycle();
```
