let a = Number(prompt ('nhập a'));
let b = Number(prompt ('nhập b'));
let c = Number(prompt ('nhập c'));
console.log(`a=${a}, b=${b}, c=${c}`)
if (a==b&&b==c)
{
	console.log('a=b=c')
}
else if (a==b)
	{
  	if (a>c)
  	{
    	console.log('a=b>c')
  	}
    else
    	console.log('c>a=b')
  }
else if (b==c)
	{
  	if (a>c)
  	{
    	console.log('a>b=c')
  	}
    else
    {
    	console.log('b=c>a')
    }
   }
else if (a==c)
	{
  	if (b>c)
  	{
    	console.log('b>a=c')
  	}
    else
    {
    	console.log('a=c>b')
    }
   }
else 
	{
  	if (a>b&&a>c)
    {
    	if (b>c)
      {
      	console.log('a>b>c')
      }
      else
   
      	console.log('a>c>b')
      }
    }
    else if (a>b&&c>a)
    {
    	console.log('c>a>b')
    }
    else if (b>a&&a>c)
    {
    	console.log('b>a>c')
    }
    else if (b>a&&c>a)
    {
    	if (b>c)
      {
      	console.log('b>c>a')
      }
      else
      {
      	console.log('c>b>a')
      }
    }
  }