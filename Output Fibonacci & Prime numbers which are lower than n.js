/***
* Nhập số n
* Xuất các số nhỏ hơn n vừa là số Fibonacci vừa là số nguyên tố
***/

let i,j,count,a,n;
n = Number(prompt("Enter the number: "));

function primeTest(a)
{
	let count = 0;
  for (i = 1; i <= a; i++)
  {
  	if(a % i == 0)
    {
    	count = count + 1;
    }
  }
  if (count == 2)
  {
  	return true;
  }
}

function fibonacci(a)
{
	let f0 = 0,f1= 1, fj = 1;
  for (j = 1; j <= a; j++)
  {
  	f0 = f1;
    f1 = fj;
    fj = f0 + f1;
    if (fj == a)
    return true;
  }
}

function numberOutput(n)
{
	for (a = 1; a < n; a++)
  {
  	if(primeTest(a) == true && fibonacci(a) == true)
    {
    	console.log(a);
    }
  }
}

numberOutput(n);
