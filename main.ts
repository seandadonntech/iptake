import { ip, ipv6, mac } from 'address';
const prompt = require('prompt-sync')();
import * as os from 'os';


function sleep(seconds: number): Promise<void> { // function for the time 
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function main() {
    while (true) {
        try {
            const choice = prompt('Please choose an option\n');

            if (choice === "1") {
                console.log(`ip address is ${ip()}`);
                await sleep(10);
                break;
            } else if (choice === "2") {
                console.log(`the ipv6 address is ${ipv6()}`);
                await sleep(10);
                break;
            } else if (choice === "3") {
                // Call the mac() function asynchronously and handle the result
                mac(function (err, addr) {
                    if (err) {
                        console.error('An error occurred:', err);
                    } else {
                        console.log(`the MAC address is ${addr}`);
                     
                        
                    }
                  
                });
                await sleep(10); 
                break;
            } else {
                console.log('invalid choice');
            }
        } catch (err) {
            console.error('An error occurred:', err);
        }
    }
}