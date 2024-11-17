export default `function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}`;
