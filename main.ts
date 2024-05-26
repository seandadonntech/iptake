import { ip, ipv6, mac} from 'address';

import fs from 'fs';
const prompt = require('prompt-sync')();


function sleep(seconds: number): Promise<void> { // function for the time
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
main()
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
                break;// statements must be broken
            } else if (choice === "3") {
                
                mac(function (err, addr) {
                    if (err) {
                        console.error('An error occurred:', err);
                    } else {
                        console.log(`the MAC address is ${addr}`);
                     if (choice === "4") {
                    console.log('make a file of this machine  ipv4, ipv6, mac information');
                    fs.writeFile('ip.txt', `${ip}`, (error) => {
                        if (error) {
                          console.error('Error writing IP address to file:', error);
                        } else {
                          console.log('IP address written to file successfully');
                        }
                      });
                    
                  
                    //error handing below
                   


                    



                     }
                     
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