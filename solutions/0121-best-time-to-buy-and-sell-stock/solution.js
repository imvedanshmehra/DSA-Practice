/**
 * @param {number[]} prices
 * @return {number}
 */

// write a fn that calculats the maximum profit from a given array, max profit can be made by buying a stock at the lowest price and selling it for at the max price.
// you cannot sell before buying the current price has to be greater than any of the current + n prices to make profit

var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maximumProfit = 0;


    for (let price of prices) {
        const profit = price - minPrice;
        
        if(price < minPrice) {
            minPrice = price;
        } else if(profit > maximumProfit) {
            maximumProfit = profit;
        }
    }

    return maximumProfit;
};
