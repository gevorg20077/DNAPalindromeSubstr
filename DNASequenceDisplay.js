class DNASequenceDisplay {
  constructor(result) {
    this.result = result
  }

  displayResult(result) {
    this.#removeElementIfExists(".DNA_to_RNA__error_DNA")
    this.#removeElementIfExists(".DNA_to_RNA__value_RNA")
    const textRNA = this.#createHTMLElement('p', "DNA_to_RNA__value_RNA", "RNA: " + result)
    document.querySelector(".DNA_to_RNA__input_DNA").parentElement.insertAdjacentElement('beforeend', textRNA)
  }

  displayError(errorMessage) {
    this.#removeElementIfExists(".DNA_to_RNA__value_RNA")
    this.#removeElementIfExists(".DNA_to_RNA__error_DNA")
    const errorDNA = this.#createHTMLElement('p', "DNA_to_RNA__error_DNA", errorMessage.message)
    document.querySelector(".DNA_to_RNA__input_DNA").parentElement.insertAdjacentElement('beforeend', errorDNA)
  }

  #createHTMLElement(tagName, className, textContent) {
    const element = document.createElement(tagName)
    element.classList.add(className)
    element.textContent = textContent
    return element
  }

  #removeElementIfExists(selector) {
    const element = document.querySelector(selector)
    if (element) {
      element.remove()
    }
  }
}

export default DNASequenceDisplay;