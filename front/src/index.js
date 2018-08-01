import './assets/scss/index.scss';
import $ from 'jquery';

export default class App {
  constructor () {
    const element = document.createElement('div');
    element.innerHTML = 'Hello World!';
    console.log('hello');
    document.body.appendChild(element);

    const button = document.getElementById('button');
    button.onclick = e => import(/* webpackChunkName: "listing" */ './listing.js').then(module => {
      const listing = new module.Listing();
    });
  }
}

new App();
