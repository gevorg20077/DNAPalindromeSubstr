import SubstrProcessor from "./SubstrProcessor.js";

class SubstrDisplay {
  constructor() {
    this.form = document.querySelector(".substr");
    this.resultElement = document.querySelector('.substr__result');
    this.wordInput = document.querySelector(".substr__word");
    this.startIndexInput = document.querySelector(".substr__start_index");
    this.endIndexInput = document.querySelector(".substr__end_index");
  }

  handleSubmit(event) {
    event.preventDefault();

    const str = this.wordInput.value;
    let startIndex = this.startIndexInput.value;
    let endIndex = this.endIndexInput.value;

    const result = SubstrProcessor.getResult(str, startIndex, endIndex);
    this.updateResult(result);
  }

  updateResult(result) {
    if (!document.querySelector('.substr__result')) {
      this.createResultElement();
    }
    this.resultElement.innerHTML = result;
    if (result === '') {
      this.resultElement.remove();
    }
  }

  createResultElement() {
    const text = document.createElement('p');
    text.classList.add('substr__result');
    this.form.insertAdjacentElement('afterend', text);
    this.resultElement = text;
  }
}

export default SubstrDisplay;