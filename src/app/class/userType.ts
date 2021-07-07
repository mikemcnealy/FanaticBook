export class UserType{
  static ADMIN:Number =1;
  static MANAGER:Number =2;
  static EMPLOYEE:Number =3;
  static USER:Number =4;
  static UNKNOW:number = 5

 static Convert_UserType(type:number):string
  {
    let converType:string;
    switch(type){
      case 1:
      converType='Admin'
      break;
      case 2:
      converType='manager'
      break;
      case 3:
      converType='employee'
      break;
      case 4:
      converType='user'
      break;
      case 5:
      converType='unknow'
      break;

      default:
        converType='unknown'
      break
    }
    return converType
  }
}
