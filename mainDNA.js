import DNASequence from './DNASequence.js';
import DNASequenceDisplay from './DNASequenceDisplay.js';

document.querySelector(".DNA_to_RNA").addEventListener("submit", function (event) {
  event.preventDefault()

  const dnaInput = document.querySelector(".DNA_to_RNA__input_DNA")
  const dnaValue = dnaInput.value;

  const dnaToRna = new DNASequence(dnaValue)
  const dnaDisplay = new DNASequenceDisplay()

  try {
    const result = dnaToRna.toRNA()
    dnaDisplay.displayResult(result)
  } catch (errorMessage) {
    dnaDisplay.displayError(errorMessage)
  }
})