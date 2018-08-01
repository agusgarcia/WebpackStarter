console.log('The listing.js module has loaded! See the network tab in dev tools...');

export default () => {
  console.log('Button Clicked: Here\'s "some text"!');
};

export class Listing {
  constructor () {
    Listing.initEvents();
  }

  static initEvents () {
    console.log('initEvents');
    Listing.printMessage();
  }

  static printMessage () {
    console.log('Hi! This is the Listing module.');
  }
}
