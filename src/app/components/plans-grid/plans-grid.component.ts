import { Component, OnInit } from "@angular/core";
import { OrderPipe } from "../../pipes/sort.pipe";

import { PlansData } from "../../models/plans-data.class";

@Component({
  selector: "app-plans-grid",
  templateUrl: "./plans-grid.component.html",
  styleUrls: ["./plans-grid.component.css"]
})
export class PlansGridComponent implements OnInit {
<<<<<<< HEAD
	data: PlansData[] = [
		{ name: "Full", start: new Date(2017, 7, 22), end: new Date(2017, 12, 31) },
		{ name: "Student", start: new Date(2017, 7, 22), end: new Date(2017, 12, 31) },
		{ name: "Half", start: new Date(2017, 7, 22), end: new Date(2017, 12, 31) }
		];
		sortColumn: string = "Plan";
=======
  data: PlansData[] = [
    { name: "Full", start: new Date(2017, 7), end: new Date(2017, 12) },
    { name: "Student", start: new Date(2017, 7), end: new Date(2017, 12) },
    { name: "Half", start: new Date(2017, 7), end: new Date(2017, 12) }
  ];
  sortColumn: string = "Plan";
>>>>>>> 03338e0a61d497777d62dafa16b9fb2230b742ad

  constructor() {}

  ngOnInit() {}

  sortByColumn(sortByColumn: string) {
    this.sortColumn = sortByColumn;
  }
}
