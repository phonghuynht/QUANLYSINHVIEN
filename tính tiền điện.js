/***
* Tính tiền điện
***/

let CSC, CSM, soKwh, soTien;
CSC = Number(prompt("Nhap chi so cu: "));
CSM = Number(prompt("Nhap chi so moi: "));

function TienDien(CSM,CSC)
{
	let soKwh = CSM - CSC;
  if (soKwh <= 100)
  {
  	soTien = soKwh * 550;
  }
  else if (soKwh <= 150)
  {
  	soTien = 100 * 550 + (soKwh - 100) * 1110;
  }
  else if (soKwh <= 200)
  {
  	soTien = 100 * 550 + 50 * 1110 + (soKwh - 151) * 1470;
  }
  else if (soKwh <= 300)
  {
  	soTien = 100 * 550 + 50 * 1110 + 50 * 1470 + (soKwh - 201) * 1600;
  }
  else if (soKwh <= 400)
  {
  	soTien = 100 * 550 + 50 * 1110 + 50 * 1470 + 100 * 1600 + (soKwh - 301) * 1720;
  }
  else
  {
  	soTien = 100 * 550 + 50 * 1110 + 50 * 1470 + 100 * 1600 + 100 * 1720 + (soKwh - 401) * 1780;
  }
	return soTien;
}

console.log(TienDien (CSM, CSC))
