let dayInput, dayBefore, dayAfter;
let monthInput, monthBefore, monthAfter;
let yearInput, yearBefore, yearAfter;

dayInput = Number(prompt("Nhap ngay: "));
monthInput = Number(prompt("Nhap thang: "));
yearInput = Number(prompt("Nhap nam: "));

console.log (`Ngay ${dayInput}, thang ${monthInput}, nam ${yearInput}`);

switch(monthInput) {
  case 1:
    if(dayInput < 1 || dayInput > 31) {
      console.log("Khong hop le");
    }
    else {
      console.log("Hop le");
      switch(dayInput) {
        case 1:
          yearBefore = yearInput - 1;
          console.log("Ngay lien truoc:31/12" + "/" + yearBefore);
          console.log("Ngay lien sau:2/1" + "/" + yearInput);
          break;
        case 31:
          console.log("Ngay lien truoc:30/1" + "/" + yearInput);
          console.log("Ngay lien sau:1/2" + "/" + yearInput);
          break;
        default:
          dayBefore = dayInput - 1;
          dayAfter = dayInput + 1;
          console.log("Ngay lien truoc:" + dayBefore + "/"+ monthInput + "/" + yearInput);
          console.log("Ngay lien sau:" + dayAfter + "/"+ monthInput + "/" + yearInput);
      }
    }
    break;
  case 2:
    if((yearInput % 4 == 0 && yearInput % 100 != 0) || (yearInput % 400 == 0)) {
      if(dayInput < 1 || dayInput > 29) {
        console.log("Khong hop le");
      }
      else {
        console.log("Hop le");
        switch(dayInput) {
          case 1:
            console.log("Ngay lien truoc:31/1" + "/" + yearInput);
            console.log("Ngay lien sau:2/2" + "/" + yearInput);
            break;
          case 29:
            console.log("Ngay lien truoc:28/2" + "/" + yearInput);
            console.log("Ngay lien sau:1/3" + "/" + yearInput);
            break;
          default:
            dayBefore = dayInput - 1;
            dayAfter = dayInput + 1;
            console.log("Ngay lien truoc:" + dayBefore + "/"+ monthInput + "/" + yearInput);
            console.log("Ngay lien sau:" + dayAfter + "/"+ monthInput + "/" + yearInput);   
        }
      }
    }
    else {
      if(dayInput < 1 || dayInput > 28) {
        console.log("Khong hop le");
      }
      else {
        console.log("Hop le");
        switch(dayInput) {
          case 1:
            console.log("Ngay lien truoc:31/1" + "/" + yearInput);
            console.log("Ngay lien sau:2/2" + "/" + yearInput);
            break;
          case 28:
            console.log("Ngay lien truoc:27/2" + "/" + yearInput);
            console.log("Ngay lien sau:1/3" + "/" + yearInput);
            break;
          default:
            dayBefore = dayInput - 1;
            dayAfter = dayInput + 1;
            console.log("Ngay lien truoc:" + dayBefore + "/"+ monthInput + "/" + yearInput);
            console.log("Ngay lien sau:" + dayAfter + "/"+ monthInput + "/" + yearInput);   
        }
      }
    }
    break;
  case 3:
    if(dayInput < 1 || dayInput > 31) {
      console.log("Khong hop le");
    }
    else {
      console.log("Hop le");
      switch(dayInput) {
        case 1:
          if((yearInput % 4 == 0 && yearInput % 100 != 0) || (yearInput % 400 == 0)) {
            console.log("Ngay lien truoc:29/2" + "/" + yearInput);
            console.log("Ngay lien sau:2/3" + "/" + yearInput);
          }
          else {
            console.log("Ngay lien truoc:28/2" + "/" + yearInput);
            console.log("Ngay lien sau:2/3" + "/" + yearInput);
          }   
          break;
        case 31:
            console.log("Ngay lien truoc:30/3" + "/" + yearInput);
            console.log("Ngay lien sau:1/4" + "/" + yearInput);
            break;
        default:
            dayBefore = dayInput - 1;
            dayAfter = dayInput + 1;
            console.log("Ngay lien truoc:" + dayBefore + "/"+ monthInput + "/" + yearInput);
            console.log("Ngay lien sau:" + dayAfter + "/"+ monthInput + "/" + yearInput);
      }
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    if(dayInput < 1 || dayInput > 30) {
      console.log("Khong hop le");
    }
    else {
      console.log("Hop le");
      switch(dayInput) {
        case 1:
          monthBefore = monthInput - 1;
          console.log("Ngay lien truoc:31" + "/" + monthBefore + "/" + yearInput);
          console.log("Ngay lien sau:2" + "/" + monthInput + "/" + yearInput);
          break;
        case 30:
          monthAfter = monthInput + 1;
          console.log("Ngay lien truoc:29" + "/" + monthInput + "/" + yearInput);
          console.log("Ngay lien sau:1" + "/" + monthAfter + "/" + yearInput);
          break;
        default:
          dayBefore = dayInput - 1;
          dayAfter = dayInput + 1;
          console.log("Ngay lien truoc:" + dayBefore + "/"+ monthInput + "/" + yearInput);
          console.log("Ngay lien sau:" + dayAfter + "/"+ monthInput + "/" + yearInput);
      }
    }
    break;
  case 5:
  case 7:
  case 10:
    if(dayInput < 1 || dayInput > 31) {
      console.log("Khong hop le");
    }
    else {
      console.log("Hop le");
      switch(dayInput) {
        case 1:
          monthBefore = monthInput - 1;
          console.log("Ngay lien truoc:30" + "/" + monthBefore + "/"+ yearInput);
          console.log("Ngay lien sau:2" + "/" + monthInput + "/" + yearInput);
          break;
        case 31:
          monthAfter = monthInput + 1;
          console.log("Ngay lien truoc:30" + "/" + monthInput + "/" + yearInput);
          console.log("Ngay lien sau:1" + "/" + monthAfter + "/" + yearInput);
          break;
        default:
          dayBefore = dayInput - 1;
          dayAfter = dayInput + 1;
          console.log("Ngay lien truoc:" + dayBefore + "/"+ monthInput + "/" + yearInput);
          console.log("Ngay lien sau:" + dayAfter + "/"+ monthInput + "/" + yearInput);
      }
    }
    break; 
  case 8:
    if(dayInput < 1 || dayInput > 31) {
      console.log("Khong hop le");
    }
    else {
      console.log("Hop le");
      switch(dayInput) {
        case 1:
          console.log("Ngay lien truoc:31/7" + "/" + yearInput);
          console.log("Ngay lien sau:2/8" + "/" + yearInput);
          break;
        case 31:
          console.log("Ngay lien truoc:30/8" + "/" + yearInput);
          console.log("Ngay lien sau:1/9" + "/" + yearInput);
          break;
        default:
          dayBefore = dayInput - 1;
          dayAfter = dayInput + 1;
          console.log("Ngay lien truoc:" + dayBefore + "/"+ monthInput + "/" + yearInput);
          console.log("Ngay lien sau:" + dayAfter + "/"+ monthInput + "/" + yearInput);
      }
    }
    break;
  case 12:
    if(dayInput < 1 || dayInput > 31) {
      console.log("Khong hop le");
    }
    else {
      console.log("Hop le");
      switch(dayInput) {
        case 1:
          console.log("Ngay lien truoc:30/11" + "/" + yearInput);
          console.log("Ngay lien sau:2/12" + "/" + yearInput);
          break;
        case 31:
          yearAfter = yearInput + 1;
          console.log("Ngay lien truoc:30/12" + "/" + yearInput);
          console.log("Ngay lien sau:1/1" + "/" + yearAfter);
          break;
        default:
          dayBefore = dayInput - 1;
          dayAfter = dayInput + 1;
          console.log("Ngay lien truoc:" + dayBefore + "/"+ monthInput + "/" + yearInput);
          console.log("Ngay lien sau:" + dayAfter + "/"+ monthInput + "/" + yearInput);
      }
    }
    break;
  default:
    console.log("Khong hop le");
}


