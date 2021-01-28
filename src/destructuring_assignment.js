/**
 * 分割代入
 */

//オブジェクトに対して使用
const myProfile1 = {
  name: "ひろ",
  age: "23"
};

const message1 = `名前は${myProfile1.name}です。年齢は${myProfile1.age}歳です`;

console.log(message1);

const { name, age } = myProfile1;
const message2 = `名前は${name}です。年齢は${age}歳です`;

console.log(message2);

//配列に対して使用

const myProfile2 = ["ひろ", 23];
const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です`;

console.log(message3);

const [name2, age2] = myProfile2;
const message4 = `名前は${name2}です。年齢は${age2}歳です`;

console.log(message4);
