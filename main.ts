import { ip, ipv6, mac } from 'address';
var prompt = require('prompt-sync')();


while (true) {
var choice = prompt('Please choose an option\n');

if (choice === "1") {
    console.log(`ip address is ${ip()}`);
    break;
} 






else{
console.log('invalid choice')

}
};
