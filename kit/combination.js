const getComb = (array, L) => {
  if (L === 1) {
    return array.map((a) => [a]);
  }
  const result = [];
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const comb = getComb(rest, L - 1);
    const attach = comb.map((c) => [fixed, ...c]);
    result.push(...attach);
  });
  return result;
};
