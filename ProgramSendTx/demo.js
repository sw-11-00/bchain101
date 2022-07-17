/**
 * 1. Get the data on the blockchain
 * 2. Get account information
 * 3. Initiate a transfer transaction
 */

// 1
const block = await ethereum.request({
    method: 'eth_getBlockByNumber',
    params: [
        'latest',
        true
    ]
});
console.log(block);

// 2
const accounts = await ethereum.request({method: 'eth_requestAccounts'});
console.log(accounts);
const account = accounts[0];
console.log(account);

const balance = await ethereum.request({
    method: 'eth_getBalance',
    params: [
        account,
        'latest'
    ]
});
console.log(balance);
console.log(Number(balance));
console.log(Number(balance) / 1e18);


// 3
const txHash = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [{
    from: account,
    to: '0x0F4b61d75Afbe799324aaE924199226875aFD4E4',
    value: Number(0.05 * 1e18).toString(16),
  }],
});
console.log(txHash);

const tx = await ethereum.request({
  method: 'eth_getTransactionByHash',
  params: [txHash]
});
console.log(tx);

const txReceipt = await ethereum.request({
  method: 'eth_getTransactionReceipt',
  params: [txHash]
});
console.log(txReceipt);
