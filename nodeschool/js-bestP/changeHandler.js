const COINS = {
    "p":1,
    "n":5,
    "d":10,
    "q":25
}
module.exports = {
    getAmount: function(coinType) {
        
       if(!COINS[coinType]) throw new Error(`Unrecognized coin ' + ${coinType}`)
           return COINS[coinType]
      },

      convertToChange: function(pago){

           let change = []

           if ( pago === 0) { return change; }

           Object.keys(COINS).reverse().map(v => {
               while(COINS[v] <= pago){
                   change.push(v)
                   pago -= COINS[v]
               }
           })

           return change
      }
};