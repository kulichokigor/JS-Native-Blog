import { Component } from "../core/component";
import { apiService } from "../services/api.services";
import { TransformService } from "../services/transform.service";
import { renderPosts } from "../templates/post.templates"

export class PostsComponent extends Component{
  constructor(id,{loader}){
    super(id);
    this.loader = loader
  }
  
  async onShow(){
    this.loader.show();
    const fbData = await apiService.getPost();
    const posts = TransformService.fbObjecttoArray(fbData);
    //відрисовка DOM post
    this.loader.hide();
    const html = posts.map(post=>renderPosts(post,{withButton:true}));
    this.$el.insertAdjacentHTML('afterbegin', html.join(''))
  }
  onHide(){
    this.$el.innerHTML = ''
  }
  init(){
    this.$el.addEventListener('click', buttonHeandler.bind(this))
  }
}

function buttonHeandler(event){
  const $el = event.target
  const id = $el.dataset.id
  if(id){
    let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    
    if(favorite.includes(id)){
      //видалити id
      $el.textContent = 'Сохранить';
      $el.classList.add('button-primary');
      $el.classList.remove('button-danger');
      favorite = favorite.filter(fId=>fId !==id)
    }else{
      //добавити id
      $el.textContent = 'Удалить';
      $el.classList.remove('button-primary');
      $el.classList.add('button-danger');
      favorite.push(id)
    }
    localStorage.setItem('favorite', JSON.stringify(favorite))
  }
}