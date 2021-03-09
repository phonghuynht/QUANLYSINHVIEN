let a = 9;
let b = 5;
let c = 7;

//a compare to b, c
if (a > b) {
	if (a > c) {
  	console.log('Max = a');
  } else { //a<c
  	console.log('Max = c');
  }
} else { //a<b
	if (b > c) {
  	console.log('Max = b');
  } else { //b<c
  	console.log('Max = c');
  }
}