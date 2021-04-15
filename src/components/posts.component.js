import { Component } from "../core/component";
import { apiService } from "../services/api.services";
import { TransformService } from "../services/transform.service";

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
    const html = posts.map(post=>renderPosts(post));
    this.$el.insertAdjacentHTML('afterbegin', html.join(''))
  }
  onHide(){
    this.$el.innerHTML = ''
  }
  init(){
    this.$el.addEventListener('click', buttonHeandler.bind(this))
  }
}

function renderPosts(post){
  const tag = post.type==='news'
    ?'<li class="tag tag-blue tag-rounded">Новость</li>'
    :'<li class="tag tag-orange tag-rounded">Заметка</li>'

    const button = (JSON.parse(localStorage.getItem('favorite')) || []).includes(post.id)
      ?`<button class="buuton-round button-small button-danger" data-id=${post.id}>Удалить</button>`
      :`<button class="buuton-round button-small button-primary" data-id=${post.id}>Сохранить</button>`
  return `
      <div class="panel">
        <div class="panel-head">
          <p class="panel-title">${post.title}</p>
          <ul class="tags">
            ${tag}
          </ul>
        </div>
        <div class="panel-body">
          <p class="multi-line">${post.fulltext}</p>
        </div>
        <div class="panel-footer w-panel-footer">
          <small>${post.date}</small>
          ${button}
        </div>
      </div>
    `
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