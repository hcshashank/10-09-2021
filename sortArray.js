console.log(
  "********** NUMBER SORT METHOD IN JS *******************************"
);
let num = [5,66,1,3,89,0,100,34,67,66,78,102,87];

num.sort(compare);
console.log(num);

function compare(a, b) {
  return a - b;
}
