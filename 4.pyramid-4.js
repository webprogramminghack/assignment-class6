// The result should be like this:

// 1 0 1 0 1
// 0 1 0 1
// 1 0 1
// 0 1
// 1

// Tips:
// You can use modulus operator
// You can use ' ' to add space between numbers

// start code here
let str = "";
for (let i = 5; i >= 1; i--) {
    
    if (i % 2 === 1) {
        // console.log("1");
        str += "1";
        str += " ";
    } else if (i % 2 === 0) {
        // console.log("0");
        str += "0";
        str += " ";
    }
    // console.log(str);
    // console.log(i);
    
    

    if (i === 1) {
        for (let j = 0; j < 5; j++) {
            // console.log(j);
            // console.log(i);
            // console.log(str);
        
            if (j === 0) {
                console.log(str);
            } else {
                // console.log(j*2);
                console.log(str.slice(j*2));
            }
        }
    }
}