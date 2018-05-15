const Block = require('./block')
const timestamp = require('time-stamp');

class Blockchain {

  constructor() {
    const genesisBlock = new Block(0, timestamp(), 0, []);
    this.chain = [genesisBlock];

    this.add = this.add.bind(this);
  }

  createNewBlock(index, nonce, transactions) {
    const previousHash = this.chain[this.chain.length-1].hash;
    this.chain.push(new Block(0, timestamp(), nonce, transactions, previousHash));
  }

  isValid() {
    return (this.chain
      .filter((block, index, chain)
        => block.hash !== block.calculateHash() ||
           (index !== 0 && block.previousHash !== chain[index-1].hash))
      .length === 0);
  }
}
