from typing import List

def dailyTemperatures(temperatures: List[int]) -> List[int]:
    result = [0] * len(temperatures)
    stack = [] # pais: [temp, index]

    for i, temp in enumerate(temperatures):
        while stack and temp > stack[-1][0]:
            stackTemp, stackIndex = stack.pop()
            result[stackIndex] = (i - stackIndex)
        
        stack.append([temp, i])
    
    return result

print(dailyTemperatures([30,38,30,36,35,40,28]))

