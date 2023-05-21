import { Component } from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent {
  faUser = faUser
}
