import { ulrCode } from '../security/code.security'
class ApiService{
  constructor(baseUrl){
    this.url = baseUrl
  }
  async createPost(post){
    try{
      const request  = new Request(this.url + '/post.json',{
      method:'post',
      body:JSON.stringify(post)
    });
    return this.useResponse(request)
    }catch(error){
      console.warn(error)
    }
  }
  async getPost(){
    try{
      const request = new Request(`${this.url}/post.json`,{
        method:'get'
      });
     return this.useResponse(request)
    }catch(error){
      console.warn(error)
    }
  }
  async getPostId(id){
    try{
      const request = new Request(`${this.url}/post/${id}.json`,{
        method:'get'
      });
     return this.useResponse(request)
    }catch(error){
      console.warn(error)
    }
  }
  async useResponse(request){
    const response = await fetch(request);
    return await response.json()
  }
}

export const apiService = new ApiService(ulrCode);