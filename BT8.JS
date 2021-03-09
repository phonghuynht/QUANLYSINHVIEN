let dayInput, dayBefore, dayAfter;
let monthInput, monthBefore, monthAfter;
let yearInput, yearBefore, yearAfter;

dayInput = Number(prompt('Add date: '));
monthInput = Number(prompt('Add month: '));
yearInput = Number(prompt('Add year: '));

switch(monthInput) {
  case 1:
    if(dayInput < 1 || dayInput > 31) {
      console.log('Invalid day !');
    }
    else {
      console.log('Valid day !');
      switch(dayInput) {
        case 1:
          yearBefore = yearInput - 1;
          console.log('Date before:31-12' + '-' + yearBefore);
          console.log('Date after:2-1' + '-' + yearInput);
          break;
        case 31:
          console.log('Date before:30-1' + '-' + yearInput);
          console.log('Date after:1-2' + '-' + yearInput);
          break;
        default:
          dayBefore = dayInput - 1;
          dayAfter = dayInput + 1;
          console.log('Date before:' + dayBefore + '-' + monthInput + '-' + yearInput);
          console.log('Date after:' + dayAfter + '-' + monthInput + '-' + yearInput);
      }
    }
    break;
  case 2:
    if((yearInput % 4 == 0 && yearInput % 100 != 0) || (yearInput % 400 == 0)) {
      if(dayInput < 1 || dayInput > 29) {
        console.log('Invalid day !');
      }
      else {
        console.log('Valid day !');
        switch(dayInput) {
          case 1:
            console.log('Date before:31-1' + '-' + yearInput);
            console.log('Date after:2-2' + '-' + yearInput);
            break;
          case 29:
            console.log('Date before:28-2' + '-' + yearInput);
            console.log('Date before:1-3' + '-' + yearInput);
            break;
          default:
            dayBefore = dayInput - 1;
            dayAfter = dayInput + 1;
            console.log('Date before:' + dayBefore + '-' + monthInput + '-' + yearInput);
            console.log('Date after:' + dayAfter + '-'+ monthInput + '-' + yearInput);   
        }
      }
    }
    else {
      if(dayInput < 1 || dayInput > 28) {
        console.log('Invalid day !');
      }
      else {
        console.log('Valid day !');
        switch(dayInput) {
          case 1:
            console.log('Date before:31-1' + '-' + yearInput);
            console.log('Date after:2-2' + '-' + yearInput);
            break;
          case 28:
            console.log('Date before:27-2' + '-' + yearInput);
            console.log('Date after:1-3' + '-' + yearInput);
            break;
          default:
            dayBefore = dayInput - 1;
            dayAfter = dayInput + 1;
            console.log('Date before:' + dayBefore + '-'+ monthInput + '-' + yearInput);
            console.log('Date after:'+ dayAfter + '-' + monthInput + '-' + yearInput);   
        }
      }
    }
    break;
  case 3:
    if(dayInput < 1 || dayInput > 31) {
      console.log('Invalid day !');
    }
    else {
      console.log('Valid day !');
      switch(dayInput) {
        case 1:
          if((yearInput % 4 == 0 && yearInput % 100 != 0) || (yearInput % 400 == 0)) {
            console.log('Date before:29/2' + '-' + yearInput);
            console.log('Date after:2/3' + '-' + yearInput);
          }
          else {
            console.log('Date before:28/2' + '-'  + yearInput);
            console.log('Date after:2/3' + '-' + yearInput);
          }   
          break;
        case 31:
            console.log('Date before:30/3' + '-' + yearInput);
            console.log('Date after:1/4' + '-' + yearInput);
            break;
        default:
            dayBefore = dayInput - 1;
            dayAfter = dayInput + 1;
            console.log('Date before:' + dayBefore + '-' + monthInput + '-' + yearInput);
            console.log('Date after:' + dayAfter + '-' + monthInput + '-' + yearInput);
      }
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    if(dayInput < 1 || dayInput > 30) {
      console.log('Invalid day !');
    }
    else {
      console.log('Valid day !');
      switch(dayInput) {
        case 1:
          monthBefore = monthInput - 1;
          console.log('Date before:31' + '-' + monthBefore + '-' + yearInput);
          console.log('Date after:2' + '-' + monthInput + '-' + yearInput);
          break;
        case 30:
          monthAfter = monthInput + 1;
          console.log('Date before:29' + '-' + monthInput + '-' + yearInput);
          console.log('Date after:1' + '-' + monthAfter + '-' + yearInput);
          break;
        default:
          dayBefore = dayInput - 1;
          dayAfter = dayInput + 1;
          console.log('Date before:' + dayBefore + '-'+ monthInput + '-' + yearInput);
          console.log('Date after:' + dayAfter + '-' + monthInput + '-' + yearInput);
      }
    }
    break;
  case 5:
  case 7:
  case 10:
    if(dayInput < 1 || dayInput > 31) {
      console.log('Invalid day !');
    }
    else {
      console.log('Valid day !');
      switch(dayInput) {
        case 1:
          monthBefore = monthInput - 1;
          console.log('Date before:30' + '-' + monthBefore + '-' + yearInput);
          console.log('Date after:2' + '-' + monthInput + '-' + yearInput);
          break;
        case 31:
          monthAfter = monthInput + 1;
          console.log('Date before:30' + '-' + monthInput + '-' + yearInput);
          console.log('Date after:1' + '-' + monthAfter + '-' + yearInput);
          break;
        default:
          dayBefore = dayInput - 1;
          dayAfter = dayInput + 1;
          console.log('Date before:' + dayBefore + '-' + monthInput + '-' + yearInput);
          console.log('Date after:' + dayAfter + '-' + monthInput + '-' + yearInput);
      }
    }
    break; 
  case 8:
    if(dayInput < 1 || dayInput > 31) {
      console.log('Invalid day !');
    }
    else {
      console.log('Valid day !');
      switch(dayInput) {
        case 1:
          console.log('Date before:31/7' + '-' + yearInput);
          console.log('Date after:2/8' + '-' + yearInput);
          break;
        case 31:
          console.log('Date before:30/8' + '-' + yearInput);
          console.log('Date after:1/9' + '-' + yearInput);
          break;
        default:
          dayBefore = dayInput - 1;
          dayAfter = dayInput + 1;
          console.log('Date before:' + dayBefore + '-'+ monthInput + '-' + yearInput);
          console.log('Date after:' + dayAfter + '-'+ monthInput + '-' + yearInput);
      }
    }
    break;
  case 12:
    if(dayInput < 1 || dayInput > 31) {
      console.log('Invalid day !');
    }
    else {
      console.log('Valid day !');
      switch(dayInput) {
        case 1:
          console.log('Date before:30/11' + '-' + yearInput);
          console.log('Date after:2/12' + '-' + yearInput);
          break;
        case 31:
          yearAfter = yearInput + 1;
          console.log('Date before:30/12' + '-' + yearInput);
          console.log('Date after:1/1' + '-' + yearAfter);
          break;
        default:
          dayBefore = dayInput - 1;
          dayAfter = dayInput + 1;
          console.log('Date before:' + dayBefore + '-' + monthInput + '-' + yearInput);
          console.log('Date after:' + dayAfter + '-' + monthInput + '-' + yearInput);
      }
    }
    break;
  default:
    console.log('Invalid day !');
}