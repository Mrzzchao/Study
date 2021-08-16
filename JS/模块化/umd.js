(function (root, factory) {
  // commonjs
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function') {
    // amd
    define(['b'], factory);
  } else if (typeof exports === 'object') {
    // es6
    exports = factory();
  } else {
    root.b = factory(root.b);
  }
})(window, function () {
  return {};
});
