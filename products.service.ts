import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductsService{

  private  CATEGORY_PATH="/products";

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

  createProducts(products) : Observable<any>{

    return this.apiService.post(this.CATEGORY_PATH,products).pipe(map(

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

  deleteProducts(id) : Observable<any>{

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
