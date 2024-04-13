"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("address");
var prompt = require('prompt-sync')();
while (true) {
    var choice = prompt('Please choose an option\n');
    if (choice === "1") {
        console.log("ip address is ".concat((0, address_1.ip)()));
        break;
    }
    else {
        console.log('invalid choice');
    }
}
;
