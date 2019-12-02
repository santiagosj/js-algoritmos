module.exports = {
    getAmount: function(coinType) {
        const COINS = {
            "p":1,
            "n":5,
            "d":10,
            "q":25
        }
       if(!COINS[coinType]) throw new Error('Unrecognized coin ' + coinType)
           return COINS[coinType]
      },
};