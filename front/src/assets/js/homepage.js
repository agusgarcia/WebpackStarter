import $ from 'jquery';

export default class Homepage {
  constructor () {
    this.initEls();
    this.initEvents();
  }

  initEls () {
    this.$els = {
      body: $('body'),
    };
  };

  initEvents () {
  }
}
