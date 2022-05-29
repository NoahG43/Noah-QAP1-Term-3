// the os core module allows you to view the contents of your computer
// you can see the platorm, architecture, the hostname, and the free memory on your device

var os = require("os");

console.log(`the following shows the operating system of your device`);
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Hostname: " + os.hostname());
console.log("Freemem: " + os.freemem());
