// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here
let str = "";

for (let i = 1; i <= 5; i++) {
    
    str += i;
    // console.log(str);
    
    
    if (i === 5) {
        for (let j = 0; j < 5; j++) {
            // console.log(j);
            // console.log(i);
            // console.log(str.slice(0, -j));

            if (j === 0) {
                console.log(str);
            } else {
                console.log(str.slice(0, -j));
            }
        }
    }
}