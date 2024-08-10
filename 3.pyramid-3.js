// The result should be like this:

// 54321
// 4321
// 321
// 21
// 1

// start code here
let str = "";

for (let i = 5; i >= 1; i--) {
    
    str += i;
    // console.log(i);   
    
    if (i === 1) {
        for (let j = 0; j < 5; j++) {
            // console.log(j);
            // console.log(i);
            // console.log(str);
        
            if (j === 0) {
                console.log(str);
            } else {
                console.log(str.substring(j));
            }
        }
    }
}