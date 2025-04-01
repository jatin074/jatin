declare module '*.css';
declare module 'owl.carousel/dist/assets/owl.carousel.css';
declare module 'owl.carousel/dist/assets/owl.theme.default.css';

declare module 'owl.carousel' {
  const OwlCarousel: any;
  export default OwlCarousel;
}

declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}
