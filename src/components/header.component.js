import {Component} from '../core/component'


export class HeaderComponent extends Component{
  constructor(id){
    super(id);
  }
  init(){
    if(localStorage.getItem('user')){
      this.hide()
    }
    document.querySelector('.js-header-start').addEventListener('click', headerStarted.bind(this))
  }
}

function headerStarted(){
  localStorage.setItem('user', JSON.stringify(true))
  this.hide();
}