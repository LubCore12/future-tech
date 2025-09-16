const rootSelector = '[data-js-input-mask]'

class InputMask {
  constructor(rootElement) {
    this.rootElement = rootElement
    this.init()
  }

  init() {
    const isLibReady = typeof IMask !== 'undefined'
      IMask(
        this.rootElement,

        {
          mask: this.rootElement.dataset.jsInputMask
        }
      )
    if (isLibReady) {

    } else {
      console.error('imask is not ready')
    }
  }
}

class InputMaskCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element)
    })
  }
}

export default InputMaskCollection