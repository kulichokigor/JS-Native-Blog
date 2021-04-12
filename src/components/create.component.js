import { Component } from "../core/component";
import { Form } from "../core/form";
import { Validators } from "../core/validators";
import { apiService } from "../services/api.services"


export class CreateComponent extends Component{
  constructor(id){
    super(id)
  }
  init(){
    this.$el.addEventListener('submit', submitHeandler.bind(this))
  }
}

async function submitHeandler(event){
  event.preventDefault();
 
  this.form = new Form(this.$el,{
    'title':[Validators.required],
    'fulltext':[Validators.required, Validators.minLength(10)]
  })
  if(this.form.isValid()){
    const formData = {
      date:new Date().toLocaleDateString(),
      type: this.$el.type.value,
      ...this.form.value()
    }

    await apiService.createPost(formData)
    this.form.clearValueForm()
    alert('Данные отправлены на сервер')
  }
}