const sha256 = require("crypto-js/sha256");

class Block {

  constructor(index, timestamp, nonce, transactions, previousHash = '') {
    this.index = index;
    this.nonce = nonce;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.hash = calculateHash();
    this.calculateHash = this.calculateHash.bind(this);
  }

  calculateHash() {
    return (sha256(this.index +
                   this.previousHash +
                   this.timestamp +
                   JSON.stringify(this.transactions) +
                   this.nonce));
  }
}

module.exports = Block;
