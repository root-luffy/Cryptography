// verify.js
const { createVerify } = require('crypto');
const { readFileSync, writeFileSync } = require('fs');

const publicKey = readFileSync('public.pem', 'utf8');
const message = readFileSync('message.txt', 'utf8');
const signature = readFileSync('signature.txt', 'utf8');

const verifier = createVerify('sha256');
verifier.update(message);
verifier.end();

const isValid = verifier.verify(publicKey, signature, 'base64');
console.log('Signature valid?', isValid ? '✅ Yes' : '❌ No');
