/**
 * 给定一个数组，按照步长分割成多组数据，返回二维数组
 * @param {Array} arr 要分割的数组
 * @param {Number} step 分割的步长，默认每5个一组
 * @returns {Array} 返回二维数组
 */
const splitArray = (arr, step = 5) => {
  const result = [];
  for (let i = 0; i < arr.length; i = i + step) {
      result.push(arr.slice(i, i + step));
  }
  return result;
}

module.exports = {
  splitArray
}