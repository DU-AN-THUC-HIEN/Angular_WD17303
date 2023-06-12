import { Component } from '@angular/core';
import { IBill } from 'src/app/interface/bill';
import { BillService } from 'src/app/services/bill/bill.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.scss']
})
export class ListBillComponent {
    bills : IBill[] = [];
  constructor( private billService: BillService){
    this.billService.getAllBill().subscribe((data:any) =>{
      this.bills = data
      console.log(this.bills);
      
    }, error =>{
      console.log(error.message);
      
    })
  }
}
