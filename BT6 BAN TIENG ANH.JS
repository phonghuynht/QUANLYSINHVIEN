const DENOMINATIONS_20000 = 20000, DENOMINATIONS_10000 = 10000,
	  DENOMINATIONS_5000 = 5000, DENOMINATIONS_1000 = 1000;

let yourCashInput = prompt('Enter your cash amount with you need to check: ');
let denominations20000Amount, denominations10000Amount, 
	denominations5000Amount, denominations1000Amount;
let yourCashAmount = Number(yourCashInput);

denominations20000Amount = Math.floor(yourCashAmount / DENOMINATIONS_20000);
console.log('There are ' + denominations20000Amount + ' bills of 20000 VND');

//your current cash after calculating denominations 20000 amount.
yourCashAmount = yourCashAmount % DENOMINATIONS_20000;

denominations10000Amount = Math.floor(yourCashAmount / DENOMINATIONS_10000);
console.log('There are ' + denominations10000Amount + ' bills of 10000 VND');

//your current cash after calculating denominations 10000 amount.
yourCashAmount = yourCashAmount % DENOMINATIONS_10000;

denominations5000Amount = Math.floor(yourCashAmount / DENOMINATIONS_5000);
console.log('There are ' + denominations5000Amount + ' bills of 5000 VND');

//your current cash after calculating denominations 5000 amount.
yourCashAmount = yourCashAmount % DENOMINATIONS_5000;

denominations1000Amount = Math.floor(yourCashAmount / DENOMINATIONS_1000);
console.log('There are ' + denominations1000Amount + ' bills of 1000 VND');