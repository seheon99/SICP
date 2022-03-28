function cont_frac(n, d, k) {
  function iter(i, sum) {
    return (
      i <= 0
      ? sum
      : iter(i - 1, n(i) / (d(i) + sum))
    );
  }
  return iter(k, 0);
}

function tan_cf(x, k) {
  return cont_frac(i => -1 * x * x, i => 2 * i - 1, k) / (-x);
}
