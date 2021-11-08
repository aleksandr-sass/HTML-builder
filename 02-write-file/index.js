const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;

const plusData = (data) => {
  fs.appendFile(
    path.join(__dirname, 'text.txt'),
    data,
    (err) => {
      if (err) {
        console.error('Error', err.message);
      }
    }
  );
};

plusData('');


stdin.on('data', (data) => {
  if ((data.toString().indexOf('exit') != -1)&&(data.toString().length == 6)) {
    exit();
  }

  plusData(data);

  stdout.write('Добавлено в text.txt. Напишите ещё что-нибудь (Added to text.txt. Please, continue typing):\n');
});
stdout.write('Напишите что-нибудь (Type something here):\n');
process.on('SIGINT', () => {  
  exit();
});
process.on('exit', () => {
  stdout.write("Завершение программы (Close app)");
})