export class PhoneNumerType{
  static Work:string ='work';
  static MOBTILE:string ='mobile';
  static PERSONAL:string ='personal';
  static HOME:string ='home';
  static UNKNOW ='unknow'

  static Convert_PhoneNumerType(type:number):string
  {
    let converType:string;
    switch(type){
      case 1:converType='work'
      break;
      case 2: converType='mobile'
      break;
      case 3: converType='personal'
      break;
      case 4: converType='home'
      break;
      default:
        converType='unknown'
      break
    }
    return converType;
  }
}
