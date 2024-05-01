let valueRNA
let errorDNA

function createRNA() {
  event.preventDefault();

  if (!valueRNA) {
    valueRNA = document.createElement('p')
    let submitDNA = document.querySelector('.DNA_to_RNA__button')
    valueRNA.classList.add('DNA_to_RNA__value_RNA')
    submitDNA.insertAdjacentElement('afterend', valueRNA)
  }

  if (!errorDNA) {
    errorDNA = document.createElement('p')
    let inputDNA = document.querySelector('.DNA_to_RNA__input_DNA')
    errorDNA.classList.add('DNA_to_RNA__error_DNA')
    inputDNA.insertAdjacentElement('afterend', errorDNA)
  }

  let valueDNA = document.querySelector('.DNA_to_RNA__input_DNA').value.toUpperCase();
  let isValid = /^[ACGT ]+$/.test(valueDNA);
  let createValueRNA = '';

  if (isValid) {
    createValueRNA = valueDNA
      .replace(/A/g, "U")
      .replace(/C/g, "x")
      .replace(/G/g, "C")
      .replace(/T/g, "A")
      .replace(/x/g, "G")

    valueRNA.innerHTML = `RNA: <b>${createValueRNA}</b>`
    document.querySelector('.DNA_to_RNA__error_DNA').remove()
    errorDNA = ''
  } else {
    errorDNA.innerHTML = "Your message is incorrect"
    document.querySelector('.DNA_to_RNA__value_RNA').remove()
    valueRNA = ''
  }
}

function isPalindrome() {
  let palindromeFalse
  let palindromeTrue
  let inputPalindrome = document.querySelector('.palindrome__button')
  event.preventDefault();
  let input = event.target.childNodes[3].value;
  const str = String(input).replace(/\s/g, '').toLowerCase();
  const len = str.length;
  let isPalindrome = true;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  if (!isPalindrome) {
    if (!document.querySelector('.palindrome__false')) {
      palindromeFalse = document.createElement("p")
      palindromeFalse.innerHTML = "It's not palindrome"
      palindromeFalse.classList.add("palindrome__false")
      inputPalindrome.insertAdjacentElement('afterend', palindromeFalse)
      document.querySelector('.palindrome__true')?.remove()
    }
  } else {
    if (!document.querySelector('.palindrome__true')) {
      palindromeTrue = document.createElement("p")
      palindromeTrue.innerHTML = "It's palindrome"
      palindromeTrue.classList.add("palindrome__true")
      inputPalindrome.insertAdjacentElement('afterend', palindromeTrue)
      document.querySelector('.palindrome__false')?.remove()
    }
  }
}

const substr = () => {
  event.preventDefault();
  let result = '';
  let str = document.querySelector(".substr__word").value;
  let startIndex = document.querySelector(".substr__start_index").value;
  let endIndex = document.querySelector(".substr__end_index").value;
  const form = document.querySelector(".substr");

  if (startIndex < 0 || startIndex === '') {
    startIndex = 0;
  }

  if (endIndex < startIndex) {
    endIndex = startIndex;
  } else if (endIndex > str.length) {
    endIndex = str.length;
  }

  for (let i = startIndex; i < endIndex; i++) {
    result += str[i];
  }

  let existingResult = document.querySelector('.substr__result');

  if (existingResult) {
    existingResult.innerHTML = result;
  } else {
    let text = document.createElement('p');
    text.classList.add('substr__result');
    form.insertAdjacentElement('afterend', text);
    text.innerHTML = result;
  }
}