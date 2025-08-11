// sign.js
const { createSign } = require('crypto');
const { readFileSync, writeFileSync } = require('fs');

const privateKey = readFileSync('private.pem', 'utf8');
console.log("privateKey to be done hereee", privateKey)
const message = readFileSync('message.txt', 'utf8');
console.log("message to be done hereee", message)

const signer = createSign('sha256'); // Hash function
console.log("sign to be done hereee", signer)
signer.update(message);
signer.end();

const signature = signer.sign(privateKey, 'base64');
console.log("signature  to be done hereee", signature)
writeFileSync('signature.txt', signature);

console.log('Message signed ✅');
