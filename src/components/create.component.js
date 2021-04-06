import { Component } from "../core/component";
import { Form } from "../core/form";
import { Validators } from "../core/validators";


export class CreateComponent extends Component{
  constructor(id){
    super(id)
  }
  init(){
    this.$el.addEventListener('submit', submitHeandler.bind(this))
  }
}

function submitHeandler(event){
  event.preventDefault();
 
  this.form = new Form(this.$el,{
    'title':[Validators.required],
    'fulltext':[Validators.required, Validators.minLength(10)]
  })
  if(this.form.isValid()){
    const formData = {
      type: this.$el.type.value,
      ...this.form.value()
    }
    console.log(formData)

    this.form.clearValueForm()
  }
}