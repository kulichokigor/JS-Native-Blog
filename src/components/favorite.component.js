import { Component } from "../core/component";
import { apiService } from "../services/api.services";
import { renderPosts } from "../templates/post.templates"


export class FavoriteComponent extends Component{
  constructor(id,options){
    super(id);
    this.loader = options.loader
  }
  init(){
    this.$el.addEventListener('click', linkClickHeandler.bind(this))
  }
  onShow(){

    const favorites = JSON.parse(localStorage.getItem('favorite'));
    const html = renderList(favorites);
    this.loader.show();
    this.$el.insertAdjacentHTML('afterbegin', html);
    this.loader.hide()
  }
  onHide(){
    this.$el.innerHTML = ''
  }
}

function renderList(list=[]){
  if(list && list.length){     //перевірка чи масив не порожній
    return `
      <ul>
        ${list.map(i=>`<li><a href="#" class="js-linkid">${i}</a></li>`).join('')}
      </ul>
    `
  }
  return '<div class="center text-warn">Вы пока ничего не добавили</div>'
}

async function linkClickHeandler(event){
  event.preventDefault()
  if(event.target.classList.contains('js-linkid')){
    this.loader.show()
    const post = await apiService.getPostId(event.target.textContent); //15.04.2021 20:47
    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('afterbegin', renderPosts(post, {withButton:false}));
    this.loader.hide();
  }
}