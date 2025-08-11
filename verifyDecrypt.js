// decrypt_verify.js (Receiver's side)
const { createVerify, privateDecrypt } = require('crypto');
const {readFileSync} = require('fs');

// Load keys and encrypted message
const receiverPrivateKey = readFileSync('private.pem', 'utf8');   // Receiver's private key
const senderPublicKey = readFileSync('public.pem', 'utf8');       // Sender's public key
const encryptedData = Buffer.from(readFileSync('encrypted.txt', 'utf8'), 'base64');

// decrypt just the message
const decryptedMessage = privateDecrypt(receiverPrivateKey, encryptedData).toString();

// load signature from file
const signature = readFileSync('signature.txt', 'utf8');

// verify
const verifier = createVerify('sha256');
verifier.update(decryptedMessage);
verifier.end();
const isValid = verifier.verify(senderPublicKey, signature, 'base64');

console.log("Message:", decryptedMessage);
console.log("Signature valid?", isValid ? "✅ Yes" : "❌ No");
