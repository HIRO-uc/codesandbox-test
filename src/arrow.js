/**
 * アロー関数
 */

//従来の関数
//  function func1(str) {
//    return str;
//  }

const func1 = function (str) {
  return str;
};

console.log(func1("func1です"));

アロー関数
=>が出てきたら関数宣言
 const func2 = (str) => {
   return str;
 }

// 結果が一行で表せるような時は{}とreturnを省略できる
// const func2 = (str) => str;

console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));
