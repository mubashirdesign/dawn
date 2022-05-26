import Swiper from "swiper";

import 'swiper/css/bundle';

class ProductGallery extends HTMLElement {
	constructor() {
		super();
       
	}

    connectedCallback() {
        console.log(document.querySelector('.swiper-product-gallery'));
        const ProductGallery = new Swiper(this, {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 1,
            thumbs: {
                swiper: document.querySelector('thumbnail-slider'),
            }
          });
       
    }

    


}


customElements.define('product-gallery', ProductGallery);


class ThumbnailSlider extends HTMLElement {
	constructor() {
		super();
      
       
	}

    connectedCallback() {
        const ThumbnailSlider = new Swiper(this, {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            
          });

       
    }

    


}


customElements.define('thumbnail-slider', ThumbnailSlider);
