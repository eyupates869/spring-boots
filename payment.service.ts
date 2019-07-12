import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable(
  {
    providedIn: 'root'
  }
)
export class PaymentService{

  private  CATEGORY_PATH="/payment";

  constructor (private apiService:ApiService){
  }

  getAll(page) : Observable<any>{

    return this.apiService.get(this.CATEGORY_PATH+'/pagination',page).pipe(map(

      res=>{

        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }

      }
    ));
  }

  getById(id) : Observable<any>{

    return this.apiService.get(this.CATEGORY_PATH,id).pipe(map(

      res=>{

        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }

      }
    ));

  }

  createPayment(payment) : Observable<any>{
    return this.apiService.post(this.CATEGORY_PATH,payment).pipe(map(
      res=>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }

  deletePayment(id) : Observable<any>{
    return this.apiService.delete(this.CATEGORY_PATH,id).pipe(map(
      res=>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }
}
