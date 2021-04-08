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
    console.log(posts)
  }
}