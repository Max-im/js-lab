export default `function isPalindrome(str) {
  const reversed = str.replace(/\W/g, '').toLowerCase().split('').reverse().join('');
  return str.replace(/\W/g, '').toLowerCase() === reversed;
}`;
