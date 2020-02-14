// 数组去重
var array = [1, 1, '1', '1'];

// 最原始的数组去重方法
function rawUnique(array)
{
  var res = [];
  for (var i = 0; i < array.length; i++)
  {
    for (var j = 0; j < res.length; j++)
    {
      if (array[i] === res[j]){
        break;
      }
    }
    // 如果array[i]是唯一的 那么循环完  j==res.length
    if (j == res.length) {
      res.push(array[i]);
    }
  }
  return res;
}
console.log(rawUnique(array));

// 使用indexOf进行数组去重
function uniqueByIndexOf(array) {
  var res = [];
  for (var i = 0; i < array.length; i++){
    if (res.indexOf(array[i]) === -1) {
      res.push(array[i]);
    }
  }
  return res;
}
console.log(uniqueByIndexOf(array));

// 排序后去重 由于sort排序机制问题，可能去重有些问题
function uniqueBySort(array){
  var res = [];
  var sortArr = array.concat().sort();
  var lastValue;
  for (var i = 0; i < sortArr.length; i++){
    // 如果是第一个元素，或者上一个元素的值与当前值不等
    if (!i || lastValue !== sortArr[i]) {
      res.push(sortArr[i]);
    }
    lastValue = sortArr[i];
  }
  return res;
}
console.log(uniqueBySort(array));