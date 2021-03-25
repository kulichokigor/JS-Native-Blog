import { Component } from "../core/component";
import { Form } from "../core/form";


export class CreateComponent extends Component{
  constructor(id){
    super(id)
  }
  init(){
    this.$el.addEventListener('submit', submitHeandler.bind(this))
  }
}

function submitHeandler(event){
  event.preventDefault()

  this.form = new Form(this.$el,{
    'title':[],
    'fulltext':[]
  })
  const formData = {
    type: this.$el.type.value,
    ...this.form.value()
  }
  console.log(formData)
}