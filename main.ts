import { ip, ipv6, mac } from 'address';
import fs from 'fs';
const prompt = require('prompt-sync')();

function sleep(seconds: number): Promise<void> { // function for the time
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function main() {
    while (true) {
        try {
            const choice = prompt('Please choose an option\n');

            if (choice === "1") {
                console.log(`IP address is ${ip()}`);
                await sleep(10);
                break;
            } else if (choice === "2") {
                console.log(`The IPv6 address is ${ipv6()}`);
                await sleep(10);
                break;
            } else if (choice === "3") {
                mac((err, addr) => {
                    if (err) {
                        console.error('An error occurred:', err);
                    } else {
                        console.log(`The MAC address is ${addr}`);
                    }
                });
                await sleep(10);
                break;
            } else if (choice === "4") {
                const ipv4Address = ip();
                const ipv6Address = ipv6();
                mac((err, addr) => {
                    if (err) {
                        console.error('An error occurred:', err);
                    } else {
                        const macAddress = addr;
                        const fileContent = `IPv4: ${ipv4Address}\nIPv6: ${ipv6Address}\nMAC: ${macAddress}`;
                        fs.writeFile('ip.txt', fileContent, (error) => {
                            if (error) {
                                console.error('Error writing IP address to file:', error);
                            } else {
                                console.log('IP address information written to file successfully');
                            }
                        });
                    }
                });
                await sleep(10);
                break;
            } else {
                console.log('Invalid choice');
            }
        } catch (err) {
            console.error('An error occurred:', err);
        }
    }
}

main();
