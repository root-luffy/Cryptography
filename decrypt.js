// decrypt.js

const { privateDecrypt } = require('crypto');
const { readFileSync, writeFileSync } = require('fs');

const privateKey = readFileSync('private.pem', 'utf8');
const encrypted = Buffer.from(readFileSync('encrypted.txt', 'utf8'), 'base64');

const decrypted = privateDecrypt(privateKey, encrypted);
writeFileSync('decrypted.txt', decrypted.toString());

console.log("Message decrypted ✅");
