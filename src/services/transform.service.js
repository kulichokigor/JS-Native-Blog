export class TransformService {
  static fbObjecttoArray(fbData){
    return Object.keys(fbData).map(key=>{
      fbData[key].id = key
      return fbData[key]
    })
  }
}