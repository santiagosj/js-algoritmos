
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
 
  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.id)
    return product;
  },

  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
}

};
