function inlich(month, year) {
    let day;
    switch (month) {
        case 1||3||5||7||8||10||12:
            day = 31;
            break;
 
        case 2:
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                day = 29;
            } else {
                day = 28;
            }
            break;
        case 4:
            day = 30;
            break;
        case 6:
            day = 30;
            break;
        case 9:
            day = 30;
            break;
        case 11:
            day = 30;
            break;
    }

    const d = 1;
    const a = parseInt((14 - month) / 12);
    const y = year - a;
    const m = month + 12 * a - 2;
    const dow = parseInt(d + y + parseInt(y / 4) - parseInt(y / 100) + parseInt(y / 400) + parseInt((31 * m) / 12)) % 7;

    console.log(`down=${dow}, day=${day}  , y=${y},m= ${m},a= ${a}`)
    console.log('  S  M  T  W  T  F  S');
    let mem = "";
    for (let i = 0; i < dow; i++) {
        mem += '   ';
    }
    for (let j = 1; j <= day; j++) {
        mem += j < 10 ? `  ${j}` : ` ${j}`;
        if (((j + dow) % 7) === 0) {
            mem += '\n';
        }
    }
    console.log(mem)
}

inlich(9, 2022);





