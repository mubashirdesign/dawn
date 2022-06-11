class MobileMenu extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {

        document.querySelector('#mobile-menu-button').addEventListener('click', () => {
          this.classList.add('flex');
          this.classList.remove('hidden');
          document.querySelector('#mobile-menu-overlay').classList.add('flex');
          document.querySelector('#mobile-menu-overlay').classList.remove('hidden');
        });
      
  
      this.addEventListener('click', (e) => {

        if (e.target.classList == this.classList || e.target.id == "mobile-menu-button-close") {
          this.classList.remove('flex');
          this.classList.add('hidden');
          document.querySelector('#mobile-menu-overlay').classList.remove('flex');
          document.querySelector('#mobile-menu-overlay').classList.add('hidden');

        }
    
      })
    
    }
  

  }
  
  customElements.define('mobile-menu', MobileMenu);
  