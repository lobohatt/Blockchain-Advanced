const Blockchain = require('./blockchain1.js');

const bitcoin = new Blockchain();


bitcoin.createNewBlock(2380, '0INA90SFSGSNGHLSR', 'BGFNGFNFGHDBFJHK');

bitcoin.createNewTransaction(100, 'ALEX48687GBYGYYG', 'JEN2YCFIR6CTVHHB');

bitcoin.createNewBlock(2380, '7JGJJSFSGSNGHLSR', '9PKNGFNFNFGDBFJHK');

bitcoin.createNewTransaction(200, 'BLEX48687GBYGYYG', 'BEN2YCFIR6CTVHHB');
bitcoin.createNewTransaction(400, 'CLEX48687GBYGYYG', 'CEN2YCFIR6CTVHHB'); //theses all three
bitcoin.createNewTransaction(600, 'ELEX48687GBYGYYG', 'DEN2YCFIR6CTVHHB');//transaction will minded

bitcoin.createNewBlock(4280, 'LFGJJSFSGSNGHLSR', '8GEDNGFNFNFGDBFJHK'); // with this new block

console.log(bitcoin);
//console.log(bitcoin.chain[1]);


