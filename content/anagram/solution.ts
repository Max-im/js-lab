export default `function anagram(stringA, stringB) {
    function cleanString(str) {
      return str
        .toLowerCase()
        .replace(/\\s/g, '')
        .replace(/\\W/g, '')
        .split('')
        .sort()
        .join('');
    }
    
    return cleanString(stringA) === cleanString(stringB);
  }`;