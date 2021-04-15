import './css/styles.css';
import {HeaderComponent} from './components/header.component';
import {NavigationComponent} from './components/navigation.component';
import {CreateComponent} from './components/create.component';
import {PostsComponent} from './components/posts.component';
import {FavoriteComponent} from './components/favorite.component';
import{Loader} from './components/loader.component'

new HeaderComponent('header');
const loader = new Loader('loader')
const navigation = new NavigationComponent('navigation');
const create = new CreateComponent('create');
const posts = new PostsComponent('posts',{loader});
const favorite = new FavoriteComponent('favorite');

navigation.tabsRegister([
  {name:'create', component:create},
  {name:'posts', component:posts},
  {name:'favorite', component:favorite}
])