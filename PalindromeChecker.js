class PalindromeChecker {
  check(input) {
    const str = String(input).replace(/\s/g, '').toLowerCase();
    const len = str.length;
    let isPalindrome = true;

    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }

    return isPalindrome;
  }
}

export default PalindromeChecker