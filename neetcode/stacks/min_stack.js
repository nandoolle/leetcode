class MinStack {
  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(0)
      this.min = val;

      return;
    }

    this.stack.push(val - this.min);

    if (val < this.min) {
      this.min = val;
    }
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.stack.length === 0) {
      return;
    }
    const popped = this.stack.pop();

    if (popped < 0) {
      const returnPop = this.min;
      this.min -= popped;
      return returnPop;
    }
    return popped + this.min;
  }

  /**
   * @return {number}
   */
  top() {
    const top = this.stack.at(-1);
    return top > 0 ? top + this.min : this.min;
  }

  /**
   * @return {number}
   */
  getMin() {
    if (this.stack.length === 0) {
      this.min = undefined;
    }
    return this.min;
  }

  //["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

  const minStack = new MinStack();

minStack.push(1);
minStack.push(2);

console.log(minStack.top());
console.log(minStack.pop());
console.log(minStack.pop());
