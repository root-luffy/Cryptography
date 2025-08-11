// encrypt.js

const { publicEncrypt } = require('crypto');
const { readFileSync, writeFileSync } = require('fs');


const publicKey = readFileSync('public.pem', 'utf8');
const message = readFileSync('message.txt', 'utf8');

const encrypted = publicEncrypt(publicKey, Buffer.from(message));
writeFileSync('encrypted.txt', encrypted.toString('base64'));

console.log("Message encrypted ✅");
