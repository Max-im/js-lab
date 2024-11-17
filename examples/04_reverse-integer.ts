export default `function(num: number): number {
    const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
    return Math.sign(num) * reversed;
}`;
