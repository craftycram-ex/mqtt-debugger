const mqtt = require('mqtt');

const mqttclient  = mqtt.connect('mqtt://mqtt.hfg.design')
mqttclient.on('connect', (d) => console.log('connect', d));
mqttclient.on('close', (d) => console.log('close', d));
mqttclient.on('disconnect', (d) => console.log('disconnect', d));
mqttclient.on('end', (d) => console.log('end', d));
mqttclient.on('error', (d) => console.log('error', d));
mqttclient.on('message', (d) => console.log('message', d));
mqttclient.on('offline', (d) => console.log('offline', d));
mqttclient.on('outgoingEmpty', (d) => console.log('outgoingEmpty', d));
mqttclient.on('packetreceive', (d) => console.log('packetreceive', d));
mqttclient.on('packetsend', (d) => console.log('packetsend', d));
mqttclient.on('reconnect', (d) => console.log('reconnect', d));
