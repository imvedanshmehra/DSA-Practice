function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let price of prices) {
        // Is current price less than the minimum price we have seen so far
        minPrice = Math.min(price, minPrice)
        // If we sell today, will we make more profit than our maxProfit
        maxProfit = Math.max(maxProfit, price-minPrice)
    }
    
    return maxProfit;
};
