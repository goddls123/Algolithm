const getPerm = (array, L) => {
  if (L === 1) {
    return array.map((a) => [a]);
  }
  const result = [];
  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const perm = getPerm(rest, L - 1);
    const attach = perm.map((c) => [fixed, ...c]);
    result.push(...attach);
  });
  return result;
};
