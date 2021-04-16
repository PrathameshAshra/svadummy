import { OwlOptions } from 'ngx-owl-carousel-o';
const CarouselConfig: OwlOptions = {
  loop: false,
  mouseDrag: false,
  touchDrag: true,
  pullDrag: true,
  autoHeight: false,
  dots: true,
  navSpeed: 400,
  navText: ['<img src=\'../../../../../assets/svg/DefaultPreviousButton.svg\'>', '<img src=\'../../../../../assets/svg/DefaultNextButton.svg\'>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    }
  },
  nav: true,
};
export {CarouselConfig };
