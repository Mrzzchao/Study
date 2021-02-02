function foo() {
  let myName = ' 极客时间 ';
  const test1 = 1;
  const test2 = 2;
  const innerBar = {
    getName() {
      console.log(test1);
      return myName;
    },
    setName(newName) {
      myName = newName;
    },
  };
  return innerBar;
}
const bar = foo();
bar.setName(' 极客邦 ');
bar.getName();
console.log(bar.getName());
