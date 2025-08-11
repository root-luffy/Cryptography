// signed_encrypted.js (Sender's side)
const { createSign, publicEncrypt } = require('crypto');
const {  readFileSync, writeFileSync } = require('fs');


// Load keys and message
const senderPrivateKey = readFileSync('private.pem', 'utf8');   // Sender's private key
const receiverPublicKey = readFileSync('public.pem', 'utf8');   // Receiver's public key
const message = readFileSync('message.txt', 'utf8');

// 1. Sign the message
const signer = createSign('sha256');
signer.update(message);
signer.end();
const signature = signer.sign(senderPrivateKey, 'base64');

// 2. Create full object: { message, signature }
const payload = JSON.stringify({ message, signature });

// 3. Encrypt the payload
const encrypted = publicEncrypt(receiverPublicKey, Buffer.from(message));
writeFileSync('encrypted.txt', encrypted.toString('base64'));

// separately save signature
writeFileSync('signature.txt', signature);
console.log("Message signed & encrypted ✅");
