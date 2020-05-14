// Advance Blockchain
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

//  We iterating through every single block in our blockchain
Blockchain.prototype.chainIsValid = function (blockchain) {

  let validChain = true; // first we check chain is valid

  for (var i = 1; i < blockchain.length; i++) {
    const currentBlock = blockchain[i];
    const prevBlock = blockchain[i - 1];
    const blockHash = this.hashBlock(prevBlock['hash'], { transactions: currentBlock['transactions'], index: currentBlock['index'] }, currentBlock['nonce']); // we check data is in blocks is correct if hash generated starts with 4 zeros as sucstring

    if (blockHash.substring(0, 4) !== '0000') validChain = false;

    if (currentBlock['previousBlockHash'] !== prevBlock['hash'])  // chain is not valid
    {
      validChain = false;
    }
  }

  const genesisBlock = blockchain[0];
  const correctNonce = genesisBlock['nonce'] === 100;
  const correctPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
  const correctHash = genesisBlock['hash'] === '0';
  const correctTransactions = genesisBlock['transactions'].length === 0;

  if (!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions) validChain = false;

  return validChain;

};



module.exports = Blockchain;