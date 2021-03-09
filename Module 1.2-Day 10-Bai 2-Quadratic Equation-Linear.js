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

let a = Number(prompt("a = "));
let b = Number(prompt("b ="));
let c = Number(prompt("c ="));

function linear (b, c) // Phương trình bậc 1 (Linear Equation)
{
    let x;
    x = - b / c;
    console.log (`Solution: x = ${x}`);
}

function quadratic(a, b, c) // Phương trình bậc 2 (Quadratic equation)
{
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
            console.log (`Distinct roots:`);
            console.log (`x1 = ${x1}`);
            console.log (`x2 = ${x2}`);
        }
    }
    result(delta);
}

function finalResult(a, b, c)
{
    if ( a != 0 )
    {
        console.log(`Quadratic equation: ${a}x^2 + ${b}x + ${c} = 0`);
        quadratic(a, b, c);
    }
    else
    {    
        if ( b != 0 )
        {
            console.log(`Linear equation: ${b}x + ${c} = 0`);
            linear(b, c);
        }
        else
        {
            if ( c != 0)
                console.log(`${c} = 0. Inconsistent.`);
            else
                console.log(`${c} = 0. Every number is a solution.`);
        }
    }
}

finalResult (a, b, c);