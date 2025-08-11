// generateKeys.js
const { generateKeyPairSync } = require('crypto');
const { writeFileSync } = require('fs');

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs1', format: 'pem' }
});

writeFileSync('public.pem', publicKey);
writeFileSync('private.pem', privateKey);
console.log("Keys generated ✅");
