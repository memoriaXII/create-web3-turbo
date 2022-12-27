import * as ethers from 'ethers';

const getLoginMessage = (address: string, nonce: string) => {
  return 'hello world';
  // return `address: ${address}, nonce: ${nonce}`
  // return [
  //     "Welcome to SOCOL Marketplace!",
  //     "Click to sign in.",
  //     "This request will not trigger a blockchain transaction or cost any gas fees.",
  //     `Wallet address:\n${address}`,
  //     `Nonce:${nonce}`,
  // ].join("\n\n");
  // return "Welcome to SOCOL Marketplace!\n\nClick to sign in.\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nWallet address:\n0xFCAd0B19bB29D4674531d6f115237E16AfCE377c\n\nNonce:d2f61e7b00d82e3b76457fe0"
};

const privateKey = '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';

const signer = new ethers.Wallet(privateKey);

const message = getLoginMessage(signer.address.toLowerCase(), 'd2f61e7b00d82e3b76457fe0');
console.log('message:', message);

const signature = signer.signMessage(message);
console.log('account:', signer.address.toLowerCase(), 'sign:', signature);
console.log(ethers.utils.arrayify(ethers.utils.hashMessage(message)));

const sig = ethers.utils.splitSignature(
  '0x82fb0e34cfc3ea50229b71b6740c0dccf9c2e89b7eb7ae6a9aad222413e915c2076add03b24d41e5099dad140db29beee025311df17ef26f0145da89f33795001b',
);
console.log({ r: sig.r, s: sig.s });
// console.log('verifyMessage:', ethers.utils.verifyMessage(message, '0x82fb0e34cfc3ea50229b71b6740c0dccf9c2e89b7eb7ae6a9aad222413e915c2076add03b24d41e5099dad140db29beee025311df17ef26f0145da89f33795001b'))
