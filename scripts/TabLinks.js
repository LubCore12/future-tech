const rootSelector = '[data-js-tab-links]'

class TabLinks {
  selectors = {
    root: rootSelector,
    link: '[data-js-tab-link-button]'
  }

  dataClasses = {
    dataLink: 'data-js-tab-link-button'
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.linkElements = this.rootElement.querySelectorAll(this.selectors.link)
    this.bindEvents()
  }

  onLinkClick(linkElement, event) {
    const tabElementId = linkElement.getAttribute(this.dataClasses.dataLink)

    document.querySelector('#' + tabElementId).click()
  }

  bindEvents() {
    this.linkElements.forEach(linkElement => {
      linkElement.addEventListener('click', (event) => {
        this.onLinkClick(linkElement, event)
      })
    })
  }
}

class TabLinksCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new TabLinks(element)
    })
  }
}

export default TabLinksCollection