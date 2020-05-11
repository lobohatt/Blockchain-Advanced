const Blockchain = require('./blockchain1.js');

const bitcoin = new Blockchain();


const previousBlockHash = '0Y6T6GYUV76TVCR8E6DI7FTUV78GYIGIBG'
const currentBlockData = [{
  amount: 10,                               // data // array of three transactions
  sender: 'N98GUYVT7IF7IFFOUYVL',
  recipient: '7GI86RFOVLUT7RFOTCGL'
}, {
  amount: 30,
  sender: 'AFEGAYVT7IF7IFFOUYVL',
  recipient: 'UGVV6RFOVLUT7RFOTCGL'

}, {
  amount: 200,
  sender: 'CDSVSDV8GUYVT7IF7IFFO',
  recipient: 'KNOJL6RFOVLUT7RFOTCGL'
}]

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

