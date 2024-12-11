export default `function mario(n) {
    let str = '';

    for (var i = 1; i <= n; i++) {
      str += new Array(i).fill('#').join('').padEnd(n, ' ') + '\\n';
    }

    console.log(str);
  }`;