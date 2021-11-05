const fs = require('fs');
const path = require('path');

const { stdin, stdout, exit } = process;
stdin.on('data', (data) => {
  console.log(data.toString().length);
  console.log("'"+data.toString()+"'");
  console.log(data.toString() == 'exit');
  console.log('data.toString()[0]', data.toString()[0]);
  console.log('data.toString()[1]', data.toString()[1]);
  console.log('data.toString()[2]', data.toString()[2]);
  fs.appendFile(
    path.join(__dirname, 'text.txt'),
    data,
    (err) => {
      if (err) {
        console.error('Error', err.message);
      }
    }
  );
});
stdout.write('Напишите что-нибудь (Type something here):\n');
process.on('SIGINT', () => {
  stdout.write("Завершение программы (Close app)");
  exit();
});