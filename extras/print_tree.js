const tree = (val, left, rigth) => {
  return {
    'val': val,
    'left': left,
    'rigth': rigth,
  };
};

const buildTree = () => {
  return tree(3,
    tree(2,
      tree(1, null, null),
      null),
    tree(4,
      tree(5, null, null),
      tree(6, null, null)
    )
  );
};

const printTree = (tree) => {
  let treeMap = {};
  treeMap = buildTreeMap(tree, treeMap, 0);
  let count = 0;

  const sortedTree = Object.entries(treeMap).sort((a, b) => a[1] - b[1]);

  for (let [key, val] of Object.values(sortedTree)) {
    if (val !== count) {
      console.log();
      count++;
    }
    process.stdout.write(key);
  }
  console.log();
};

const buildTreeMap = (tree, treeMap, level) => {
  treeMap[tree.val] = level;

  if (tree.left) {
    buildTreeMap(tree.left, treeMap, level + 1);
  }
  if (tree.rigth) {
    buildTreeMap(tree.rigth, treeMap, level + 1);
  }
  return treeMap;
}

printTree(buildTree());
