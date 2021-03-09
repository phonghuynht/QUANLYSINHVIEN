const MENH_GIA_20000 = 20000, MENH_GIA_10000 = 10000,
	  MENH_GIA_5000 = 5000, MENH_GIA_1000 = 1000;

let tienMatNhapVao = prompt('Nhập số tiền mặt bạn muốn kiểm tra: ');
let soLuongTienMatMenhGia20000, soLuongTienMatMenhGia10000, 
	soLuongTienMatMenhGia5000, soLuongTienMatMenhGia1000;
let tienMatCuaBan = Number(tienMatNhapVao);

soLuongTienMatMenhGia20000 = Math.floor(tienMatCuaBan / MENH_GIA_20000);
console.log('Có ' + soLuongTienMatMenhGia20000 + ' tờ tiền mệnh giá 20000 VND');

//Tiền mặt hiện tại của bạn sau khi tính số tờ tiền mệnh giá 20000 VND
tienMatCuaBan = tienMatCuaBan % MENH_GIA_20000;

denominations10000Amount = Math.floor(yourCashAmount / MENH_GIA_10000);
console.log('Có ' + soLuongTienMatMenhGia10000 + ' tờ tiền mệnh giá 10000 VND');

//Tiền mặt hiện tại của bạn sau khi tính số tờ tiền mệnh giá 10000 VND
tienMatCuaBan = tienMatCuaBan % MENH_GIA_10000;

denominations5000Amount = Math.floor(yourCashAmount / MENH_GIA_5000);
console.log('Có ' + soLuongTienMatMenhGia5000 + ' tờ tiền mệnh giá 5000 VND');

//Tiền mặt hiện tại của bạn sau khi tính số tờ tiền mệnh giá 5000 VND
tienMatCuaBan = tienMatCuaBan % MENH_GIA_5000;

denominations1000Amount = Math.floor(yourCashAmount / MENH_GIA_1000);
console.log('Có ' + soLuongTienMatMenhGia1000 + ' tờ tiền mệnh giá 1000 VND');