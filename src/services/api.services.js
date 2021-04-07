import {ulrCode} from '../security/code.security'
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

    const response = await fetch(request);
    return await response.json();
    }catch(error){
      console.warn(error)
    }
  }
}

export const apiService = new ApiService(ulrCode);