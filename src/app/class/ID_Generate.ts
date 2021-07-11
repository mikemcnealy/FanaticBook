export class Generate{
  static ID(digits:number):number{
    digits = digits || 8;
    return Math.round(Math.random() * Math.pow(10,digits))
    }
}
