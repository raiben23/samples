// 'map' implemented using 'forEach'

const map = (array, func) => {
  let res = [];
  array.forEach((item, index) => {
    res.push(func(item, index, array))
  });
  return res;
};

console.log(map([1, 2, 3], x => 2 * x));
