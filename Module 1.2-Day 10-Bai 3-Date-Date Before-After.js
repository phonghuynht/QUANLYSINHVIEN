/***
 * Enter a date.
 * Indicates whether that date is valid or not.
 * Indicates the date before and after.
***/

let day = Number(prompt('Plese enter day:'));
let month = Number(prompt('Plese enter month:'));
let year = Number(prompt('Plese enter year:'));
let date = (day + '/' + month + '/' + year);
let end = 0;
console.log(`Entered date: ${date}`);

function before(day, month, year)
{
    valid();
    console.log(`Date before is: ${day}/${month}/${year}`);
}
    
function after(day, month, year)
{
    console.log(`Date after is: ${day}/${month}/${year}`);
}

function normal()
{
    before(day-1, month, year);
    after(day+1, month, year);
}

function valid()
{
    console.log (`${date} is valid.`)
}

function invalid()
{
    console.log (`${date} is not valid.`)
}

function result(day, month, year)
{
    if ( 1 <= day && day <= 31 )
    {   
        switch (month)
        {
            case 1:
                switch (day)
                {
                    case 1:
                        before(31, 12, year - 1);
                        after (day + 1, month, year);
                        break;
                    case end = 31:
                        before(day - 1, month, year);
                        after(1, month + 1, year)
                        break;
                    default:
                        normal();
                }
                break;
            case 2:
                if ( year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
                {   
                    switch (day)
                    {
                        case 1:
                            before (31, month - 1, year);
                            after (day + 1, month, year);
                            break;
                        case end = 29:
                            before (day - 1, month, year);
                            after (1, month + 1, year);
                            break;
                        case 30:
                        case 31:
                            invalid();
                            break;
                        default:
                            normal();
                    }
                }
                else
                {
                    switch (day)
                    {
                        case 1:
                            before (31,month - 1, year);
                            after (day + 1, month, year);
                            break;
                        case end = 28:
                            before (day - 1, month, year);
                            after (1, month + 1, year);
                            break;
                        case 29:
                        case 30:
                        case 31:
                            invalid();
                            break;
                        default:
                            normal();
                    }
                }
                break;
            case 3:
                if ( year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
                {   
                    switch (day)
                    {
                        case 1:
                            before (29, month-1, year);
                            after (day + 1, month, year);
                            break;
                        case end = 31:
                            before (day - 1, month, year);
                            after (1, month + 1, year);
                            break;
                        default:
                            normal();
                    }
                }
                else
                {
                    switch (day)
                    {
                        case 1:
                            before (28, month - 1, year);
                            after (day + 1, month, year);
                            break;
                        case end = 31:
                            before (day - 1, month, year);
                            after (1, month + 1, year);
                            break;
                        default:
                            normal();
                    }
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                switch (day)
                {
                    case 1:
                        before (31, month-1, year);
                        after (day + 1, month, year);
                        break;
                    case end = 30:
                        before (day - 1, month, year);
                        after (1, month + 1, year);
                        break;
                    case end = 31:
                        invalid();
                        break;
                    default:
                        normal();
                }
                break;
            case 5:
            case 7:
            case 10:
                switch (day)
                {
                    case 1:
                        before (30, month-1, year);
                        after (day + 1, month, year);
                        break;
                    case end = 31:
                        before (day - 1, month, year);
                        after (1, month + 1, year);
                        break;
                    default:
                        normal();
                }
                break;
            case 8:
                switch (day)
                {
                    case 1:
                        before (31, month-1, year);
                        after (day + 1, month, year);
                        break;
                    case end = 31:
                        before (day - 1, month, year);
                        after (1, month + 1, year);
                        break;
                    default:
                        normal();
                }
                break;
            case 12:
                switch (day)
                {
                    case 1:
                        before (30, month-1, year);
                        after (day + 1, month, year);
                        break;
                    case end = 31:
                        before (day - 1, month, year);
                        after (1, 1, year + 1);
                        break;
                    default:
                        normal();
                }
                break;
            default:
                invalid();
        }
    }
    else
        invalid();
}

result (day, month, year);