export default `function maxChar(str) {

  const map = {};
    let maxChar;
    let maxNum = 0

    str.replace(/\s/g, '').toLowerCase().split('').forEach(char => {
      map[char] = map[char] + 1 || 1;
    });
    
    for(const char in map) {
      if (map[char] > maxNum) {
        maxChar = char;
        maxNum = map[char];
      }
    }
  
    return maxChar;
    
  }`;