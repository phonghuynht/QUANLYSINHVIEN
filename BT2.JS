let a,b,c;
a = Number(prompt("Nhap so a:"));
b = Number(prompt("Nhap so b:"));
c = Number(prompt("Nhap so c:"));
if(a>b)
{
 if(b>c)
 {
 console.log("a la so lon nhat")
 }
 else if (b<c)
 {
  if(a>c)
  {
  console.log("a la so lon nhat")
  }
  if(a==c)
  {
  console.log("a,c la so lon nhat")
  }
  else
  console.log("c la so lon nhat")
 }
 else
 {
 console.log("a la so lon nhat")
 }
}
else if(a<b)
{
 if(b<c)
 {
 console.log("c la so lon nhat")
 }
 else if(b>c)
 {
 console.log("b la so lon nhat")
 }
 else
 {
 console.log("b,c la so lon nhat")
 }
}
else if (a==b)
{
 if(b==c)
 {
 console.log("a,b,c bang nhau")
 }
 else if(b>c)
 {
 console.log("a,b la so lon nhat")
 }
 else if(b<c)
 {
 console.log("c la so lon nhat")
 }
}