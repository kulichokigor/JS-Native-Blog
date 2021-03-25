import {Component} from '../core/component';

export class HeaderComponent extends Component{
  constructor(id){
    super(id);
  }
  init(){
    if(localStorage.getItem('user')){
      this.hide()
    }
    const btn = this.$el.querySelector('.js-header-start');
    btn.addEventListener('click', heandlerButton.bind(this))
  }
}

function heandlerButton(){
  localStorage.setItem('user', JSON.stringify('true'));
  this.hide()
}