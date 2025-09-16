class Counter {
  constructor(button, buttonNumber) {
    this.buttonElements = document.querySelectorAll(button)
    this.selectors = {
      buttonNumber
    }
    this.bindEvents()
  }

  onButtonClick(buttonIndex) {
    const buttonNumberElement =
      this.buttonElements[buttonIndex].querySelector(this.selectors.buttonNumber)

    buttonNumberElement.textContent =
      Number(buttonNumberElement.textContent) + 1
  }

  bindEvents() {
    this.buttonElements.forEach((buttonElement, index) => {
      buttonElement.addEventListener('click', () => {
        this.onButtonClick(index)
      })
    })
  }
}

export default Counter;