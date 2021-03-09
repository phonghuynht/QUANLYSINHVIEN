let cauThu = ['Ronaldo', 'Messi', 'Neymar'];
let soLuong = cauThu.length;
console.log(soLuong);
console.log(cauThu);
do
{
	let danhSach = "";
  for (let i = 0; i < cauThu.length; i ++)
  	{
			    danhSach += ` ${i}. ${cauThu[i]}`;
    }
	alert(danhSach);
  var anwser = prompt ("Có xóa cầu thủ nào hay không (Y/N)");
  if (anwser == "Y" || anwser == "y")
  {
    let vitri = Number(prompt (`Nhập stt cầu thủ muốn xóa: ${danhSach}`));
    cauThu.splice(vitri,1);
  }
  else
  {
    console.log (cauThu);
    console.log ("Goodbye!");
    break;
  }
}
while (anwser != "N" || anwser != "n");