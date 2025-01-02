export const newNode = (value) => {
  return {
    left: null, 
    right: null,
    value: value,
  };
}

export const buildTree = () => {
  const root = newNode(0);
  root.left = newNode(2);
  root.right = newNode(7);
  root.left.left = newNode(1);
  root.left.right = newNode(3);
  root.right.left = newNode(6);
  root.right.right = newNode(9);

  return root;
}

export const printTree = (tree) => {
  if (!tree) {
    return null;
  }

  console.log(tree.value);

  if (tree.left !== undefined && tree.left !== null) {
    printTree(tree.left);
  }

  if (tree.right !== undefined && tree.right !== null) {
    printTree(tree.right);
  }
}

export const reverseTree = (tree) => {
  if (!tree) {
    return null;
  }

  const holderLeft = tree.left;
  tree.left = tree.right;
  tree.right = holderLeft;

  if (tree.left !== undefined && tree.left !== null) {
    reverseTree(tree.left);
  }

  if (tree.right !== undefined && tree.right !== null) {
    reverseTree(tree.right);
  }

  return tree;
}

