/***
* Nhập a,b,c 
* Phương trình có nghiệm hay không?
* Nếu có nghiệm thì có mấy nghiệm?
***/

let a,b,c,delta;
a = Number(prompt("Enter a: "));
b = Number(prompt("Enter b: "));
c = Number(prompt("Enter c: "));

function checkEquation (a,b,c)
{
	switch(a)
  {
  	case 0:
    	if(b!=0)
      {
      	return "linearEquationSolution"
      }
      else 
      {
      	if(c == 0)
        {
        	return "everySolution"
        }
        else
        {
        	return false
        }
      }
      break;
    
    default:
  	let delta = b*b - 4*a*c;
  	if (delta < 0)
  	{
    	return false
  	}
  	else if (delta == 0)
  	{
    	return "doubleRoot"
  	}
  	else
  	{
    	return "2distinctRoots"
  	}
  }
}


function calculateEquation (a,b,c)
{
  let delta = b*b - 4*a*c;
  if (checkEquation (a,b,c) == false)
  {
  	console.log("The equation has no real roots");
  }
  else if(checkEquation (a,b,c) == "linearEquationSolution")
  {
  	let solution = -c/b
    console.log(`The equation has a solution: ${solution}`)
  }
  else if(checkEquation (a,b,c) == "everySolution")
  {
  	console.log("Every number is a solution")
  }
  else if (checkEquation (a,b,c) == "doubleRoot")
  {
  	let doubleRoot = -b/(2*a);
    console.log(`The equation has double root: ${doubleRoot}`);
  }
  else
  {
  	let sqrtOfdelta = Math.sqrt(delta);
    let root1 = (-b - sqrtOfdelta)/(2*a);
    let root2 = (-b + sqrtOfdelta)/(2*a);
    console.log(`The equation has 2 distinct roots: ${root1} and ${root2}`);
  }
}

calculateEquation(a,b,c)
