const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(pathToFile, 'utf-8');
let text = '';
readStream.on('data', (chunk) => text += chunk);
readStream.on('end', () => console.log(text));
readStream.on('error', (error) => console.log('Error', error.message));