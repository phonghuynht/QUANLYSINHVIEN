/***
 * Enter a number "n".
 * List numbers that are both Fibonacci and Prime numbers which are lower than n.
***/

function fibonacciTest (inputNumber)
{
    const f0 = 0, f1 = 1;
    let fi = 0;
    let f2Before = f0;
    let f1Before = f1;
    
    for (let i = 0; i < (2 + inputNumber); i++)
    {
        fi = f2Before + f1Before;
        
        if (fi == inputNumber)
        {
            return true;
        }
        
        if (fi > inputNumber)
        {
            return false;
        }
        
        f2Before = f1Before;
        f1Before = fi;
    }
}

function primeTest (inputNumber)
{
    for (let i = 2; i < inputNumber; i++)
    {
        if (inputNumber % i == 0)
        {
            return false;
        }
    }
    return true;
}

function lowerNumber (inputNumber)
{
    for (let i = 2; i < inputNumber; i++)
    {
        if (fibonacciTest (i) == true && primeTest (i) == true)
        {
            console.log(`${i} is both Fibonacci and Prime number.`);
        }
    }
}

do
{
	var n = Number(prompt('Please enter a number greater than 2'));
}
while (n <= 2);
lowerNumber(n);