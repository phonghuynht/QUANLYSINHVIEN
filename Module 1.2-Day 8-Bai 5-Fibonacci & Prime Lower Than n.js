/***
 * Enter a number "n".
 * List numbers that are both Fibonacci and Prime numbers which are lower than n.
***/

do
{
	var inputNumber = Number(prompt('Please enter a number greater than 2'));
}
while (inputNumber <= 2);

const f0 = 0, f1 = 1;
let fi = 0;
let f2Before = f0;
let f1Before = f1;

for (let i = 2; i< (2 + inputNumber); i++)
{
    fi = f2Before + f1Before;
    if (fi>=inputNumber)
    {
    	break;
    }
    f2Before = f1Before;
    f1Before = fi;
    
    let remainderZeroCount = 0;
    for (let j = 1; j <= fi; j++)
    {
        if (fi % j == 0)
        {
            remainderZeroCount += 1;
        }
    }
    if (remainderZeroCount == 2)
    {
        console.log (`f${i}: ${fi} is both Fabonacci and Prime number`);
    }
}