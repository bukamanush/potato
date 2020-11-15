import { Component, OnInit, ViewChild } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { Table } from 'primeng/table';
import { FilterUtils } from 'primeng/utils';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  sales: any;
  loaded:boolean=false;
  @ViewChild('dt') table: Table;
  constructor(private salesService: SalesService) {
    salesService.getSales().then(
      (res: any) => {
        this.sales = res;
        this.loaded= true;
        console.log(res);   
      },
      err => {
        console.log(err);    
      }
    )

  }

  ngOnInit(): void {
  }
  onRowEditInit(product) {
    console.log(product);
    
    // this.sales.data[product.id] = {...product};
}
}
