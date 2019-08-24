const maxProfit = function(arr) {
  
  //Tests to check if arr is valid
  if (!arr) return undefined;
  if (!Array.isArray(arr)) {
    return undefined;
  } else {
    for (let i of arr) {
      if (!Number(i)) return undefined;
    }
  }



  let leftArray = arr.slice(0, Math.floor(arr.length / 2));
  let rightArray = arr.slice(Math.floor(arr.length / 2), arr.length);

  if (leftArray.length < 3 && rightArray.length < 3) {
    
    //get crossTradeValue
    let crossTradeValue = tradeValue(Math.min(...leftArray), Math.max(...rightArray));
    
    let leftTradeValue = 0;
    let rightTradeValue = 0;

    //get left trade value
    if (leftArray.length === 2) {
      leftTradeValue = tradeValue(leftArray[0], leftArray[1]);
    }

    //get right trade value
    if (rightArray.length === 2) {
      rightTradeValue = tradeValue(rightArray[0], rightArray[1]);
    }


    return Math.max(leftTradeValue, rightTradeValue, crossTradeValue);

  } else {
    let crossTradeValue = tradeValue(Math.min(...leftArray), Math.max(...rightArray));
    return Math.max(maxProfit(leftArray), maxProfit(rightArray), crossTradeValue);
  }
};

const tradeValue = function(buyPrice, sellPrice) {
  if (buyPrice && !sellPrice) return 0;
  if (!buyPrice || !sellPrice) return undefined;
  if (!Number(buyPrice) || !Number(sellPrice)) return undefined;
  return (sellPrice - buyPrice > 0 ? sellPrice - buyPrice : 0);
};


console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));

module.exports = {
  maxProfit: maxProfit,
  tradeValue: tradeValue,
};