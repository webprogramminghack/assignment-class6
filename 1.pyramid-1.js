// The result should be like this:

// 54321
// 5432
// 543
// 54
// 5

// start code here
let str = "";

for (let i = 5; i >= 1; i--) {
    
    str += i;
    
    if (i === 1) {
        for (let j = 0; j < 5; j++) {
            // console.log(j);
            // console.log(i);
            // console.log(str);

            if (j === 0) {
                console.log(str);
            } else {
                console.log(str.slice(0, -j));
            }
        }
    }
}