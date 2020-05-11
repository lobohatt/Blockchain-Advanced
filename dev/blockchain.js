const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];

function Blockchain() {
  this.chain = [];
  this.newTransactions = [];

  this.currentNodeUrl = currentNodeUrl;
  this.networkNodes = [];

  this.createNewBlock(100, '0', '0'); //Genesis Block 
}

Blockchain.prototype.createNewBlock = function (nonce, previuosBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,                   // what no. block is in chain
    timestamp: Date.now(),
    transactions: this.newTransactions,  // all the new or pending transactions that has just been created we want to put those in this new block
    // new transactions that are waiting to be put into the block
    nonce: nonce,    // comes from proof of work
    hash: hash,   // data from our new block// all our transactions are going to be compressed into a single string of code that is our hash
    previuosBlockHash: previuosBlockHash // data from previous block // hash of previous block
  };
  this.newTransactions = []; // clear out all transaction for storing for next block // after creation of new block we clear out new transactions
  this.chain.push(newBlock); // pushing newBlock to the chain

  return newBlock;   // returning to createNewBlock
}

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function (amount, sender, recipient) {

  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient
  };

  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()['index'] + 1;  // returns the block no. //as new transaction minded with next createdblock // what block we will be able to find our new transaction in 
  // or this.chain[this.chain.length]

};

Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce) {
  const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
};

Blockchain.prototype.proofOfWork = function (previousBlockHash, currentBlockData) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

  while (hash.substring(0, 4) !== '0000') {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  }
  return nonce;
};




module.exports = Blockchain;