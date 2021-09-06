import { Book } from './../interface/book';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {} from '../interface/book'
import { } from '../interface/user';
import {UserType} from '../class/userType'


@Injectable({
  providedIn: 'root'
})
export class API {

  constructor(private http:HttpClient) { }
   url ="http://localhost:3000/";
   record:any;
   user =UserType
  Get(collection:string,id?:number,user?:string ,PWD?:string):Observable<any>{

    if(collection !=undefined){
      if(user ==undefined && PWD ==undefined && id !=undefined){

        return this.record = this.http.get(this.url+`${collection}/${id}`)
      }
      else if(user !=undefined && PWD !=undefined && id ==undefined){

      }
      else{
        return this.record = this.http.get(this.url+collection)
      }
    }
  }
  Post(collection:string,User_id:number){
    if(collection !=undefined){

    }
  }
  PUT(collection:string,User_id:number){
    if(collection !=undefined){

    }
  }
  Patch(collection:string,User_id:number){
    if(collection !=undefined){

    }
  }

  Delete(collection:string,id:number,User_id:number){
    if(id>0 && collection !=null){
      this.http.delete(`this.url+collection/+${id}`)
    }
  }
}
