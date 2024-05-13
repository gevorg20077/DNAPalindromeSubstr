import PalindromeChecker from './PalindromeChecker.js';
import PalindromeDisplay from './PalindromeDisplay.js';

document.querySelector('.palindrome').addEventListener('submit', function(event) {
  event.preventDefault();

  const input = event.target.querySelector('.palindrome__input').value;

  const checker = new PalindromeChecker();
  const display = new PalindromeDisplay();

  const isPalindrome = checker.check(input);
  display.displayResult(isPalindrome);
});