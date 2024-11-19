export default `function reverseInteger(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
    return Math.sign(num) * reversed;
}`;
