import { MyPromise } from "../src/MyPromise.js";

const promise = new MyPromise((resolve) => {
  resolve("skeleton");
});

promise.then((value) => {
  console.log("MyPromise example:", value);
});
