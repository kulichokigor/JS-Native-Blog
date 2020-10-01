import {Component} from '../core/component';

export class NavComponent extends Component{
  constructor(id){
    super(id)
    this.tabs = [];
  }

  tabRegistration(tabs){
    this.tabs = tabs
  }
  init(){
    this.$el.addEventListener('click', activeTabHeandler.bind(this))
  }
}

function activeTabHeandler(event){
  event.preventDefault()
  if(event.target.classList.contains('tab')){
    
    Array.from(this.$el.querySelectorAll('.tab')).forEach(tab=>{
      tab.classList.remove('active')
    })
    event.target.classList.add('active')

    //hide component
    this.tabs.forEach(t=>t.component.hide())
 
    //show component
    const tabComponent = this.tabs.find(t=>t.name===event.target.dataset.name)
    tabComponent.component.show()
  }
}