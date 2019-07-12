import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

// @ts-ignore
@Injectable(
  {
    providedIn: 'root'
  }
)
export class CustomersService{

  private  CATEGORY_PATH="/customers";

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
    ) );
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

  createCustomers(customers) : Observable<any>{

    return this.apiService.post(this.CATEGORY_PATH,customers).pipe(map(

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

  deleteCustomers(id) : Observable<any>{

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
