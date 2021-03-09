let day,daybefore,dayafter;
let month, monthbefore,monthafter;
let year,yearbefore,yearafter;
day = Number(prompt("Nhap ngay: "));
month = Number(prompt("Nhap thang: "));
year = Number(prompt("Nhap nam: "));
switch (month){
case 1:
if (day < 1 || day > 31)
{
console.log ('Invalid day !');
}
else
{
consle.log ('Valid day !');
switch(day){
case 1:
yearbefore = year - 1;
console.log('Ngay lien truoc 31-12' + '-' + yearbefore);
console.log('Ngay lien sau 2-1' + '-' + year);
break;
case 31:
console.log('Ngay lien truoc 30-1' + '-' + year);
console.log('Ngay lien sau 1-2' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 
1 + '-' + year);
console.log("Ngay lien sau:" + dayafter + '-'+ 1 + '-' + year);
}
}
break;
case 2:
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
{
if(day < 1 || day > 29)
{
console.log('Invalid day !');
}
else
{
console.log('Valid day !');
switch(day)
{
case 1:
console.log('Ngay lien truoc:31-1' + '-' + year);
console.log('Ngay lien sau:2-2' + '-' + year);
break;
case 29:
console.log('Ngay lien truoc:28-2' + '-' + year);
console.log('Ngay lien sau:1-3' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-'     + 2 + '-' + year);
console.log('Ngay lien sau:' + dayafter + '-' +     2 + '-' + year);   
}
}
}
else
{
if(day < 1 || day > 28)
{
console.log('Invalid day!');
}
else
{
console.log('Valid day !')
switch(day)
{
case 1:
console.log('Ngay lien truoc:31-1' + '-' + year);
console.log('Ngay lien sau:2-2' + '-' + year);
break;
case 28:
console.log('Ngay lien truoc:27-2' + '-' + year);
console.log('Ngay lien sau:1-3' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 2 + '-' + year);
console.log('Ngay lien sau:' + dayafter + '-' + 2 + '-' + year);   
}
}
}
break;
case 3:
if(day < 1 || day > 31)
{
console.log('Invalid day !');
}
else
{
console.log('Valid day !');
switch(day)
{
case 1:
if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
{
console.log('Ngay lien truoc:29-2' + '-' + year);
console.log('Ngay lien sau:2-3' + '-' + year);
}
else 
{
console.log('Ngay lien truoc:28-2' + '-' + year);
console.log('Ngay lien sau:2-3' + '-' + year);
}   
break;
case 31:
console.log('Ngay lien truoc:30-3' + '-' + year);
console.log('Ngay lien sau:1-4' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 3 + '-' + year);
console.log('Ngay lien sau:' + dayafter + '-' + 3 + '-' + year);
}
}
break;
case 4:
if (day < 1 || day > 30)
{
console.log ('Invalid day !');
}
else
{
consle.log ('Valid day !');
switch(day){
case 1:
console.log('Ngay lien truoc: 31-3' + '-' + year);
console.log('Ngay lien sau: 2-4' + '-' + year);
break;
case 30:
console.log('Ngay lien truoc: 29-4' + '-' + year);
console.log('Ngay lien sau: 1-5' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 
4 + '-' + year);
console.log("Ngay lien sau:" + dayafter + '-'+ 4 + '-' + year);
}
}
break;
case 5:
if (day < 1 || day > 31)
{
console.log ('Invalid day !');
}
else
{
consle.log ('Valid day !');
switch(day){
case 1:
console.log('Ngay lien truoc 30-4' + '-' + year);
console.log('Ngay lien sau 2-5' + '-' + year);
break;
case 31:
console.log('Ngay lien truoc 30-5' + '-' + year);
console.log('Ngay lien sau 1-6' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 
5 + '-' + year);
console.log("Ngay lien sau:" + dayafter + '-'+ 5 + '-' + year);
}
}
break;
case 6:
if (day < 1 || day > 30)
{
console.log ('Invalid day !');
}
else
{
consle.log ('Valid day !');
switch(day){
case 1:
console.log('Ngay lien truoc: 31-5' + '-' + year);
console.log('Ngay lien sau: 2-6' + '-' + year);
break;
case 30:
console.log('Ngay lien truoc: 29-6' + '-' + year);
console.log('Ngay lien sau: 1-7' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 
6 + '-' + year);
console.log("Ngay lien sau:" + dayafter + '-'+ 6 + '-' + year);
}
}
break;
case 7:
if (day < 1 || day > 31)
{
console.log ('Invalid day !');
}
else
{
consle.log ('Valid day !');
switch(day){
case 1:
console.log('Ngay lien truoc 30-6' + '-' + year);
console.log('Ngay lien sau 2-7' + '-' + year);
break;
case 31:
console.log('Ngay lien truoc 30-7' + '-' + year);
console.log('Ngay lien sau 1-8' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 
7 + '-' + year);
console.log("Ngay lien sau:" + dayafter + '-'+ 7 + '-' + year);
}
}
break;
case 8:
if (day < 1 || day > 31)
{
console.log ('Invalid day !');
}
else
{
consle.log ('Valid day !');
switch(day){
case 1:
console.log('Ngay lien truoc 31-7' + '-' + year);
console.log('Ngay lien sau 2-8' + '-' + year);
break;
case 31:
console.log('Ngay lien truoc 30-8' + '-' + year);
console.log('Ngay lien sau 1-9' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 
8 + '-' + year);
console.log("Ngay lien sau:" + dayafter + '-'+ 8 + '-' + year);
}
}
break;
case 9:
if (day < 1 || day > 30)
{
console.log ('Invalid day !');
}
else
{
consle.log ('Valid day !');
switch(day)
{
case 1:
console.log('Ngay lien truoc: 31-8' + '-' + year);
console.log('Ngay lien sau: 2-9' + '-' + year);
break;
case 30:
console.log('Ngay lien truoc: 29-9' + '-' + year);
console.log('Ngay lien sau: 1-10' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 
9 + '-' + year);
console.log("Ngay lien sau:" + dayafter + '-'+ 9 + '-' + year);
}
}
break;
case 8:
if (day < 1 || day > 31)
{
console.log ('Invalid day !');
}
else
{
consle.log ('Valid day !');
switch(day){
case 1:
console.log('Ngay lien truoc 30-9' + '-' + year);
console.log('Ngay lien sau 2-10' + '-' + year);
break;
case 31:
console.log('Ngay lien truoc 30-10' + '-' + year);
console.log('Ngay lien sau 1-11' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 
10 + '-' + year);
console.log("Ngay lien sau:" + dayafter + '-'+ 10 + '-' + year);
}
}
break;
case 11:
if (day < 1 || day > 30)
{
console.log ('Invalid day !');
}
else
{
consle.log ('Valid day !');
switch(day){
case 1:
console.log('Ngay lien truoc: 31-10' + '-' + year);
console.log('Ngay lien sau: 2-11' + '-' + year);
break;
case 30:
console.log('Ngay lien truoc: 29-11' + '-' + year);
console.log('Ngay lien sau: 1-12' + '-' + year);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 
11 + '-' + year);
console.log("Ngay lien sau:" + dayafter + '-'+ 11 + '-' + year);
}
}
break;
case 12:
if (day < 1 || day > 31)
{
console.log ('Invalid day !');
}
else
{
console.log ('Valid day !');
switch(day){
case 1:
console.log('Ngay lien truoc: 30-11' + '-' + year);
console.log('Ngay lien sau: 2-12' + '-' + year);
break;
case 31:
yearafter = year + 1
console.log('Ngay lien truoc: 30-12' + '-' + year);
console.log('Ngay lien sau: 1-1' + '-' + yearafter);
break;
default:
daybefore = day - 1;
dayafter = day + 1;
console.log('Ngay lien truoc:' + daybefore + '-' + 
12 + '-' + year);
console.log("Ngay lien sau:" + dayafter + '-'+ 12 + '-' + year);
}
}
break;
default:
console.log('khong hop le');
}