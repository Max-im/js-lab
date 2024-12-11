export default `function binarySum(strA, strB) {
  const a = parseInt(strA, 2);
  const b = parseInt(strB, 2);
  const len = Math.max(strA.length, strB.length);
  return (a + b).toString(2).padStart(len, '0');
}`;