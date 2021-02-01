/**
 * mapやfilterを使った処理
 */
const nameArr = ["田中", "佐藤", "佐々木"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

//mapは配列の要素を引数に渡して処理を実行する。引数を二つ渡す場合は第一引数が要素、第二引数が0から始まる添字にな
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filterは条件式に一致する要素だけを取り出す
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "佐々木") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
