import { Component, OnInit } from '@angular/core';
import { OrderPipe } from '../../pipes/sort.pipe';
import {Payment} from '../../models/payment-data.class';

@Component({
  selector: 'app-member-payments',
  templateUrl: './member-payments.component.html',
  styleUrls: ['./member-payments.component.css']
})
export class MemberPaymentsComponent implements OnInit {
  data: Array<Payment> = new Array<Payment>(
    new Payment(
      '2/22/2014',
      'descriptionssss1',
      10,
      'By check',
      'Yes',
      'Noteeess'
    ),
    new Payment(
      '1/22/2014',
      'descriptionssss2',
      10,
      'By check',
      'Yes',
      'Noteeess'
    ),
    new Payment(
      '3/22/2014',
      'descriptionssss3',
      10,
      'By check',
      'Yes',
      'Noteeess'
    ));
  sortColumn: string = 'Plan';

  constructor() {
  }

  ngOnInit() {}

  sortByColumn(sortByColumn: string) {
    this.sortColumn = sortByColumn;
  }
}


