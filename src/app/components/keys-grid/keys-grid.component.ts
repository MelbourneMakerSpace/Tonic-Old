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
    { serial: 222, added: new Date(2017, 10), active: true },
    { serial: 333, added: new Date(2017, 10), active: true },
    { serial: 444, added: new Date(2017, 10), active: true }

  ];
  sortColumn: string = "Plan";

  constructor() {}

  ngOnInit() {}

  sortByColumn(sortByColumn: string) {
    this.sortColumn = sortByColumn;
  }
}
