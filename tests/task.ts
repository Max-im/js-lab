export function runTests(userCode: any) {
    const results = [];
    try {
      const add = new Function(userCode + '; return add;')();
      results.push({
        passed: add(2, 3) === 5,
        message: 'Test 1: add(2, 3) should return 5',
      });
    } catch (error: any) {
      results.push({
        passed: false,
        message: `Error: ${error.message}`,
      });
    }
    return results;
  }