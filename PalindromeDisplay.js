class PalindromeDisplay {
  displayResult(isPalindrome) {
    const inputPalindrome = document.querySelector('.palindrome__button');
    const palindromeFalse = document.querySelector('.palindrome__false');
    const palindromeTrue = document.querySelector('.palindrome__true');

    if (isPalindrome) {
      if (!palindromeTrue) {
        const element = document.createElement('p');
        element.innerHTML = "It's palindrome";
        element.classList.add('palindrome__true');
        inputPalindrome.insertAdjacentElement('afterend', element);
        palindromeFalse?.remove();
      }
    } else {
      if (!palindromeFalse) {
        const element = document.createElement('p');
        element.innerHTML = "It's not palindrome";
        element.classList.add('palindrome__false');
        inputPalindrome.insertAdjacentElement('afterend', element);
        palindromeTrue?.remove();
      }
    }
  }
}

export default PalindromeDisplay