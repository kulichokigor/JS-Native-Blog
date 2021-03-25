import {Component} from '../core/component'

export class NavigationComponent extends Component{
  constructor(id){
    super(id);
    this.tabs=[]
  }
  init(){
    this.$el.addEventListener('click', tabClickHandler.bind(this))
  }
  tabsRegister(tabs){
    this.tabs = tabs;
  }
}

function tabClickHandler(event){
  event.preventDefault();
  if(event.target.classList.contains('tab')){
    const tab = document.querySelectorAll('.tab');
    Array.from(tab).forEach(item=>item.classList.remove('active'))
    event.target.classList.add('active');

    this.tabs.filter(item=>{
      item.component.hide()
      if(item.name===event.target.dataset.name){
        item.component.show()
      }
    })
  }
}