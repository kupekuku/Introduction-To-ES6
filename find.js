const ages = [18, 24, 26, 30, 31, 45, 60];
const check1 = ages.find( a => a < 24); // 18
const check2 = ages.findIndex( a => a === 30); //3
const check3 = ages.findIndex( a => a === 6); //-1