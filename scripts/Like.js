class Like {
  selectors = {
    likes: '[data-js-like]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  states = {
    like: 'Like',
    dislike: 'Dislike',
  }

  constructor() {
    this.likeElements = document.querySelectorAll(this.selectors.likes)
    this.bindEvents()
  }

  setStateInfo(element, state) {
    element.ariaLabel = state
    element.title = state
  }

  changeState(likeElement) {
    switch (likeElement.ariaLabel) {
      case this.states.like: {
        this.setStateInfo(likeElement, this.states.dislike)
        break
      }

      case this.states.dislike: {
        this.setStateInfo(likeElement, this.states.like)
      }
    }
  }

  onLikeClick(likeIndex) {
    const likeElement = this.likeElements[likeIndex]

    likeElement.classList.toggle(this.stateClasses.isActive)
    this.changeState(likeElement)
  }

  bindEvents() {
    this.likeElements.forEach((likeElement, index) => {
      likeElement.addEventListener('click', () => {
        this.onLikeClick(index)
      })
    })
  }
}

export default Like;