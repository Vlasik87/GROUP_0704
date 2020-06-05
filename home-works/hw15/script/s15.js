function hello() {
  console.log(this);
}

const otherHello = hello;
const u = hello;
otherHello();
u();
