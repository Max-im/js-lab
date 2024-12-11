export default `function chank(arr, size) {
    const result = [];
    let chank = [];

    for (const item of arr) {
      chank.push(item);
      if (chank.length === size) {
        result.push(chank);
        chank = [];
      }
    }
    if (chank.length > 0) {
      result.push(chank);
    }
    return result;
    
  }`;