/*** 
 * Solve Quadratic equation
 * ax^2 + bx + c = 0 (a <> 0)
 * Method: 
 * Indicate Delta = b^2 - 4ac
 * If:
 *      Delta < 0: complex roots - Vô nghiệm;
 *      Delta = 0: real roots: - b/2a;
 *      Delta > 0: distinct roots: (-b+-căn Delta)/2a
 ***/

function aCheck (a)
{
    if (a == 0)
        return false;
    else
        return true;
}

function quadratic(a, b, c)
{
    console.log(`${a}x^2 + ${b}x + ${c} = 0`);
}

function delta (a, b, c)
{
    let delta = b * b - 4 * a * c;
    return delta;
}

function result(delta)
{
		delta = delta (a, b, c);
    if ( delta < 0 )
        console.log(`Complex roots. No solution.`);
    else if (delta == 0)
    {
        let x;
        x = - b / ( 2 * a);
        console.log (`Real roots: x1 = x2 = ${x}`);
    }
    else
    {
        let x1, x2;
        x1 = (- b + Math.sqrt(delta)) / (2 * a);
        x2 = (- b - Math.sqrt(delta)) / (2 * a);
        console.log (`Distinct roots`);
        console.log (`x1 = ${x1}`);
        console.log (`x2 = ${x2}`);
    }
}

do
{
    var a = Number(prompt("a = (a is different from 0)"));
    var b = Number(prompt("b ="));
    var c = Number(prompt("c ="));
} while (aCheck(a) == false)

quadratic(a, b, c);

result(delta);
