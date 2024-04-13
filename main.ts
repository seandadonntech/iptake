import { ip, ipv6, mac } from 'address';
var prompt = require('prompt-sync')();


while (true) {
var choice = prompt('Please choose an option\n');

if (choice === "1") {
    console.log(`ip address is ${ip()}`);
    
    break;
} 
else if (choice==="2"){
console.log(`the ipv6 address is ${ipv6()}`);
break;
}else{
console.log('invalid choice')

}
};
