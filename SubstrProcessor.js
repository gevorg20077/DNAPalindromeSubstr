class SubstrProcessor {
  static getResult(str, startIndex, endIndex = str.length) {
    let result = '';
    if (startIndex < 0 || startIndex === '') {
      startIndex = 0;
    }
    if (endIndex < startIndex) {
      endIndex = startIndex;
    }
    if (endIndex > str.length) {
      endIndex = str.length
    }
    for (let i = startIndex; i < endIndex; i++) {
      result += str[i];
    }
    return result;
  }
}

export default SubstrProcessor