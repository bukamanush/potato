import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

/**
 * Service to get sales details
 */
@Injectable({
  providedIn: 'root'
})
export class SalesService {
  sales:any;
  constructor(private httpService:HttpService) { }

  getSales():Promise<any>{
    return new Promise((resolve,reject)=>{
        if(!this.sales){
          this.httpService.doGet(environment.api.sales).subscribe(
            data =>{
              this.sales =data;
              resolve(this.sales);
            },
            err=>{
              reject(err);
            }
          )
        }else{
          resolve(this.sales);
        }
    });
  }

  addSales(){
    
  }
}
