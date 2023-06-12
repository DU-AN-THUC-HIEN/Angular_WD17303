import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBill } from 'src/app/interface/bill';
import { BillService } from 'src/app/services/bill/bill.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-detail-bill',
  templateUrl: './detail-bill.component.html',
  styleUrls: ['./detail-bill.component.scss']
})
export class DetailBillComponent {
  bills !: IBill
  billproduct !:any
  constructor(
    private billService: BillService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));
      this.billService.getBillId(id).subscribe((bill: any) => {
        this.bills = bill
        this.billproduct= bill.products
        console.log(this.bills.products);

      })
    })
   
  }
}
