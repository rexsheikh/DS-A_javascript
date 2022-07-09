function kWeakestRows(mat, k) {
  let hmap = {};
  let res = [];
  for (let i = 0; i < mat.length; i++) {
    hmap[i] = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) hmap[i]++;
    }
    res.push(i);
  }
  let final = res.sort((a, b) => hmap[a] - hmap[b]);
  return final.slice(0, k);
}

let mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

let k = 3;

console.log(kWeakestRows(mat, k));
