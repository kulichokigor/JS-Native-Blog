import { Component } from "../core/component";
import { apiService } from "../services/api.services";
import { TransformService } from "../services/transform.service";

export class PostsComponent extends Component{
  constructor(id){
    super(id)
  }
  
  async onShow(){
    const fbData = await apiService.getPost();
    const posts = TransformService.fbObjecttoArray(fbData);
    //відрисовка DOM post
    const html = posts.map(post=>renderPosts(post));
    this.$el.insertAdjacentHTML('afterbegin', html.join(''))
  }
  onHide(){
    this.$el.innerHTML = ''
  }
}

function renderPosts(post){
  const tag = post.type==='news'
    ?'<li class="tag tag-blue tag-rounded">Новость</li>'
    :'<li class="tag tag-orange tag-rounded">Заметка</li>'

    const button = '<button class="buuton-round button-small button-primary">Сохранить</button>'
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