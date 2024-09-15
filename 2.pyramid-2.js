// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here
const rows = 5;

for (let i = 0; i < rows; i++) {
  let line = '';

	  for (let j = 1; j <= (rows - i); j++) {
     line += j;
    }

console.log(line);
	}

