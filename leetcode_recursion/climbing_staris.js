/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 3) {
    return n;
  }

  return rec_climbStrais(1, 1, n);
};

const rec_climbStrais = (one, two, steps) => {
  if (steps > 1) {
    const temp = one;
    one = one + two;
    two = temp;
    return rec_climbStrais(one, two, steps - 1);
  }
  console.log(one);
  return one;
}
