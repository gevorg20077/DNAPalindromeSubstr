class DNASequence {
  constructor(valueDNA) {
    this.valueDNA = valueDNA.toUpperCase()
  }

  #isValid() {
    return /^[ACGT ]+$/.test(this.valueDNA)
  }

  toRNA() {
    if (!this.#isValid()) {
      throw new Error("Your DNA is incorrect");
    }

    return this.#convertDNAtoRNA()
  }

  #convertDNAtoRNA() {
    return this.valueDNA
      .replace(/A/g, "U")
      .replace(/C/g, "x")
      .replace(/G/g, "C")
      .replace(/T/g, "A")
      .replace(/x/g, "G")
  }
}

export default DNASequence;
