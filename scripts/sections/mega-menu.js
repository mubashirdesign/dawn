class MegaMenu extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    // desktop megamenu
    document.querySelectorAll('.megamenu-link').forEach(function (link) {
      link.addEventListener('mouseover', function () {
        let handle = link.dataset.handle

        document
          .querySelectorAll('.megamenu-link')
          .forEach((item) => item.classList.remove('active'))
        document
          .querySelectorAll('.megamenu-products')
          .forEach((item) => item.classList.add('hidden'))
        link.classList.add('active')
        document
          .querySelector(`.megamenu-products[data-handle="${handle}"]`)
          .classList.remove('hidden')
      })
    })
    //mobile logics
    document
      .querySelector('#mobile__button')
      .addEventListener('click', function (e) {
        if (document.querySelector('#mobile__menu').style.display != 'block') {
          document.querySelector('#mobile__menu').style.display = 'block'
          setTimeout(() => {
            document.querySelector('#mobile__menu').style.transform =
              'translateX(0)'
          }, 0)
          document.querySelector('#mobile__button--icon-close').style.display =
            'block'
          document.querySelector('#mobile__button--icon-open').style.display =
            'none'
          setTimeout(() => {
            document.querySelector('body').style.position = 'fixed'
          }, 1000)
        } else if (
          document.querySelector('#mobile__menu').style.display == 'block'
        ) {
          document.querySelector('#mobile__menu').style.transform =
            'translateX(-100%)'
          document.querySelector('#mobile__menu').style.display = 'none'

          document.querySelector('#mobile__button--icon-close').style.display =
            'none'
          document.querySelector('#mobile__button--icon-open').style.display =
            'block'
          document.querySelector('body').style.position = 'relative'
        }
      })

    document.querySelectorAll('.mobile-item').forEach(function (link) {
      link.addEventListener('click', function () {
        let handle = link.dataset.handle
        link.classList.toggle('active')
        document
          .querySelector(`.mobile-childlinks[data-handle="${handle}"]`)
          .classList.toggle('hidden')
      })
    })
  }
}

customElements.define('mega-menu', MegaMenu)
