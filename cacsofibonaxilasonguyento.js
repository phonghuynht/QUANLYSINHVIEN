let inputNumber = parseInt(prompt('please enter number'));
let F0 = 0;
let F1 = 1;
let Fi;
console.log(`all the Fibonaxi numbers are primes which are lower than ${inputNumber}`);
console.log(F1);
for(let i= 2;i <= inputNumber; i++)
{
   Fi = F0 + F1;
   F0 = F1;
   F1 = Fi;
   if(Fi >= inputNumber)
   break;
   let d = 0;
   for( let a = 1;a <= Fi;a++)
   {
      if(F1 % a == 0)
      {
         d = d + 1;
      }
   }
   if(d == 2)
   {
      console.log(Fi);
   }
}