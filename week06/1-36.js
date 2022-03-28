function abs(n) {
  return Math.abs(n);
}

function average(a, b) {
  return a / 2 + b / 2;
}

function display(text) {
  return console.log(text);
}

const tolerance = 0.00001;

function fixed_point(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }
  function try_with(guess) {
    const next = f(guess);
    display(next);
    return (
      close_enough(guess, next)
      ? next
      : try_with(next)
    );
  }
  return try_with(first_guess);
}

function fixed_point_average_damping(f, first_guess) {
  function close_enough(x, y) {
    return abs(x - y) < tolerance;
  }
  function try_with(guess) {
    const next = average(guess, f(guess));
    display(next);
    return (
      close_enough(guess, next)
      ? next
      : try_with(next)
    );
  }
  return try_with(first_guess);
}

function math_log(n) {
  return Math.log(n);
}

display('-----with-average-damping-----')
fixed_point_average_damping((x) => math_log(1000) / math_log(x), 2); // 9 times
display('-----without-average-damping-----')
fixed_point((x) => math_log(1000) / math_log(x), 2); // 35 times
