from typing import List 

def maxProfit(prices: List[int]) -> int:
    l, r = 0, 1
    max_profit = 0

    while r < len(prices):
        if prices[l] > prices[r]:
            l = r

        profit = prices[r] - prices[l]
        max_profit = max(max_profit, profit)
        r += r

    return max_profit

print(maxProfit([2,1,2,1,0,1,2]))
