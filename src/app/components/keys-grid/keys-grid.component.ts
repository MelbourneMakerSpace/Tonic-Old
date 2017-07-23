import { Component, OnInit } from '@angular/core';
import { OrderPipe } from "../../pipes/sort.pipe";

import { KeysData } from "../../models/keys-data.class";

@Component({
  selector: 'app-keys-grid',
  templateUrl: './keys-grid.component.html',
  styleUrls: ['./keys-grid.component.css']
})
export class KeysGridComponent implements OnInit {

 data:KeysData[] = [
    { Serial: 222, Added: new Date(2017, 10), Active: true },
    { Serial: 333, Added: new Date(2017, 10), Active: true },
    { Serial: 444, Added: new Date(2017, 10), Active: true }

  ];
  sortColumn: string = "Plan";

  constructor() {}

  ngOnInit() {}

  sortByColumn(sortByColumn: string) {
    this.sortColumn = sortByColumn;
  }
}
