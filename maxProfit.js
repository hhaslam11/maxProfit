const maxProfit = function(arr) {
  return 0;
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