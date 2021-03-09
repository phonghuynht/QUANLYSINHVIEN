let x1,x2;
let delta;
let a = Number(prompt('Nhap gia tri cua a'));
let b = Number(prompt('Nhap gia tri cua b'));
let c = Number(prompt('Nhap gia tri cua c'));
delta=(b*b-4*a*c)
if(delta ==0)
{
 x1=x2=-b/(2*a) ;
 console.log(`phuong trinh co nghiem kep ${x1=x1}`);
}
else if(delta<0)
{
console.log (`phuong trinh vo nghiem`);
} 
else{
 x1=(-b-Math.sqrt(delta))/(2*a);
 x2=(-b+Math.sqrt(delta))/(2*a);
 console.log(`phuong trinh co nghiem la: ${x1}`);
 console.log(`phuong trinh co nghiem la :${x2}`);
}