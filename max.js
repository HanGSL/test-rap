const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let max_value = Number.NEGATIVE_INFINITY;

rl.question('Enter number 1 : ', (num1_str) => {
  const num1 = Number(num1_str);
  if (num1 > max_value) {
    max_value = num1;
  }

  rl.question('Enter number 2 : ', (num2_str) => {
    const num2 = Number(num2_str);
    if (num2 > max_value) {
      max_value = num2;
    }

    rl.question('Enter number 3 : ', (num3_str) => {
      const num3 = Number(num3_str);
      if (num3 > max_value) {
        max_value = num3;
      }

      console.log(`Max value is : ${max_value}`);
      rl.close();
    });
  });
});

"เเก้ไขไฟล์"
"hello nwe branch 0"