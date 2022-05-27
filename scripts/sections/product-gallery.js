import { Swiper, Thumbs, Pagination } from "swiper";

import 'swiper/css/bundle';


class ProductGallery extends HTMLElement {
	constructor() {
		super(); 
	}

    connectedCallback() {
        var ThumbnailSlider = new Swiper(document.querySelector('thumbnail-slider'), {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            
          });

        var ProductGallery = new Swiper(this, {
            loop: true,
          
            spaceBetween: 10,
            slidesPerView: 1,
            modules: [Thumbs, Pagination],
            thumbs: {
                swiper: ThumbnailSlider,
            },
            pagination: {
                el: ".swiper-pagination",
              },
          });
   
    }
}


customElements.define('product-gallery', ProductGallery);

