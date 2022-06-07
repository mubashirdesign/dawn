class MobileFilters extends HTMLElement {
    constructor() {
      super();
    }
  
    updateOptions() {
      const fieldsets = Array.from(this.querySelectorAll('fieldset'));
      this.options = fieldsets.map((fieldset) => {
        return Array.from(fieldset.querySelectorAll('input')).find((radio) => radio.checked).value;
      });
    }
  }
  
  customElements.define('mobile-filters', MobileFilters);
  