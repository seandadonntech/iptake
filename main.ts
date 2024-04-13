import { ip, ipv6 } from 'address';
const prompt = require('prompt-sync')();

function sleep(seconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function main() {
    while (true) {
        try {
            const choice = prompt('Please choose an option\n');

            if (choice === "1") {
                console.log(`ip address is ${ip()}`);
                await sleep(5);
                break; 
            } 
            else if (choice === "2") {
                console.log(`the ipv6 address is ${ipv6()}`);
                await sleep(5);
                break;
            } 
            else {
                console.log('invalid choice');
            }
        } catch (err) {
            console.error('An error occurred:');
        }
    }
}


main();
