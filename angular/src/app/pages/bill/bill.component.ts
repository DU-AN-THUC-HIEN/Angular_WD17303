import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent  implements OnInit{
  detailOrder: any[] = [];

  constructor(private orderService: BillService) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails(): void {
    this.orderService.getAllBill().subscribe(
      (response: any[]) => {
        this.detailOrder = response;
        console.log(this.detailOrder);
        
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  huyDon(): void {
    // Xử lý logic khi người dùng hủy đơn hàng
  }
}
