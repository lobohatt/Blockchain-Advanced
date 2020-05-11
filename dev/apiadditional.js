const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Blockchain = require('./blockchain1');

const bitcoin = new Blockchain();


app.use(bodyParser.json());  // for accessing data succh as req.body.amount // we use this
app.use(bodyParser.urlencoded({ extended: false }));




app.get('/blockchain', (req, res) => {
  res.send(bitcoin);
});



app.post('/transaction', (req, res) => {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient); // it will return block index as function return block index
  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});



app.get('/mine', (req, res) => {
  res.send('Hello');
});







app.listen(3000, () => {
  console.log('server up');
});

/*----------------------------------------------------------------------------------------*/



const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const Blockchain = require('./blockchain1');
require('events').EventEmitter.defaultMaxListeners = 15;

const app = express();

const nodeAddress = uuid.v1().split('-').join('');

const bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.get('/blockchain', (req, res) => {
  res.send(bitcoin);
});



app.post('/transaction', (req, res) => {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});



app.get('/mine', (req, res) => {

  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transaction: bitcoin.pendingTransactions,
    index: lastBlock['index'] + 1
  };


  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

  bitcoin.createNewTransaction(12.5, "00", nodeAddress);

  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
  res.json({
    note: "New block minded successfully",
    block: newBlock
  });
});




app.listen(3000, () => {
  console.log('server up');
});

/*------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------*/



const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const Blockchain = require('./blockchain1');
require('events').EventEmitter.defaultMaxListeners = 15;

const app = express();

const nodeAddress = uuid.v1().split('-').join('');

const bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.get('/blockchain', (req, res) => {
  res.send(bitcoin);
});



app.post('/transaction', (req, res) => {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});



app.get('/mine', (req, res) => {

  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transaction: bitcoin.pendingTransactions,
    index: lastBlock['index'] + 1
  };


  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

  bitcoin.createNewTransaction(12.5, "00", nodeAddress);

  const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
  res.json({
    note: "New block minded successfully",
    block: newBlock
  });
});




app.listen(3000, () => {
  console.log('server up');
});