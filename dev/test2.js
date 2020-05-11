const Blockchain = require('./blockchain1.js');

const bitcoin = new Blockchain();

//console.log(bitcoin);

bitcoin.createNewBlock(2380, '0INA90SFSGSNGHLSR', 'BGFNGFNFGHDBFJHK');
bitcoin.createNewBlock(2400, 'HDHDJDJSGJSNGHLSR', 'MHFMHSDSFGHDBFJHK');
bitcoin.createNewBlock(2630, 'GJNXH0SFSGSNGHLSR', 'ZCANSDSFlGHDBFJHK');
bitcoin.createNewBlock(4280, 'MHDE90SFSGSNGHLSR', 'GFSGSSDSFGHDBFJHK');

console.log(bitcoin);