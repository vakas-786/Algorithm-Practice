function getMaxProfit(stockPrices) {

    if (stockPrices < 2){
      throw new Error('blank') 
    }
    let minPrice = stockPrices[0]
    let maxProfit = stockPrices[1] - stockPrices[0]
    
     for (let i =1; i < stockPrices.length; i++){
       const currentPrice = stockPrices[i]; 
       
       const potential = currentPrice - minPrice
       
       maxProfit = Math.max(maxProfit, potential)
   
   
       minPrice = Math.min(minPrice, currentPrice)
       
     }
     
     return maxProfit
   
   }
   
   const array = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(array))   