/*** 
 * Giả sử tiền điện sinh hoạt phải trả hàng tháng được tính bậc thang theo số
KWh tiêu thụ như sau: (giá chưa bao gồm 10% VAT)
 * 100 KWh đầu tiên: 550đ/KWh
 * Từ KWh 101-150: 1110đ/KWh
 * Từ KWh 151-200: 1470đ/KWh
 * Từ KWh 201-300: 1600đ/KWh
 * Từ KWh 301-400: 1720đ/KWh
 * Từ KWh 401 trở đi: 1780đ/KWh
Viết chương trình nhập vào chỉ số cũ (CSC) và chỉ số mới (CSM). Cho biết tổng số tiền
cần phải trả sau khi đã tính VAT
 ***/

function electricityMoney (newNo, oldNo)
{
    let kw = newNo - oldNo;
    let money;
    if ( 400 < kw )
        money = (550 * 100 + 1110 * 50 + 1470 * 50 + 1600 * 100 + 1720 * 100 + 1780 * (kw-400));
    else if (300 < kw)
        money = (550 * 100 + 1110 * 50 + 1470 * 50 + 1600 * 100 + 1720 * (kw-300));
    else if (200 < kw)
        money = (550 * 100 + 1110 * 50 + 1470 * 50 + 1600 * (kw-200));
    else if (150 < kw)
        money = (550 * 100 + 1110 * 50 + 1470 * (kw-150));
    else if (100 < kw)
        money = (550 * 100 + 1110 * (kw-100));
    else
        money = (550 * kw);
    return money;
}

let oldNo = Number(prompt('Old Number: '));
let newNo = Number(prompt('New Number: '));
let money = electricityMoney (newNo, oldNo);
console.log (newNo + '-' + oldNo)
console.log (money);