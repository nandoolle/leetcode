import { buildTree, printTree } from './reverse-tree.js';

export const findTreeHight = (tree) => {
  let hightCounter = 0;

  while (tree) {
    hightCounter ++;
    if (!tree.left) {
      return hightCounter;
    }
    tree = tree.left;
  }
  return 0;
}

const countTreeElements = (tree) => {
  let treeHight = findTreeHight(tree);
  let treeElementsCount = 0;
  
  while (treeHight !== 0) {
    treeElementsCount += treeHight --;
  }

  return treeElementsCount;
}

const prettyPrintThreeLevelTree = (tree) => {
  let treePrintWhiteSpaces = countTreeElements(tree) -1;
  let branchFlag = false;
  let leftFlag = true;
  
  for (let count = 0; treePrintWhiteSpaces !== 0; treePrintWhiteSpaces --, count ++) {
    if (tree) {
      if (!branchFlag) {
        branchFlag = !branchFlag;
        console.log(` `.repeat(treePrintWhiteSpaces) + tree.value);
        if (leftFlag) {
          tree = tree.left;
          continue;
        }
      }
      console.log(` `.repeat(treePrintWhiteSpaces) + (`/\\ `).repeat(count));
      branchFlag = !branchFlag;
    }
  }

  return treeElementsCount;
}

console.log(prettyPrintThreeLevelTree(buildTree()));

