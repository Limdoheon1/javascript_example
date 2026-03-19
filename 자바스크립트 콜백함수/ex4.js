function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}
var logSquare = function (i) {
  console.log(Math.pow(i, 2));
};

repeat(5, logSquare);
