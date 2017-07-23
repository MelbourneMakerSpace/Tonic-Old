import { Component, OnInit } from "@angular/core";
import { OrderPipe } from "../../pipes/sort.pipe";

import { Member } from "../../models/member-data.class";

@Component({
  selector: "app-sort-grid",
  templateUrl: "./sort-grid.component.html",
  styleUrls: ["./sort-grid.component.css"]
})
export class SortGridComponent implements OnInit {
  data:Member[] = [
    { Name: "Tony Bellomo", Email: "tony.bellomo@gmail.com", Plan: "full", Balance: 0.0, Status: "Active", Phone: "555-1234" },
    { Name: "Tony Bellomo2", Email: "tony.bellomo@gmail.com", Plan: "half", Balance: 5.0, Status: "Active", Phone: "555-1234" },
    { Name: "Tony Bellomo3", Email: "tony.bellomo@gmail.com", Plan: "full", Balance: 20.0, Status: "Disabled", Phone: "555-1234" }
  ];
  sortColumn: string = "Plan";

  constructor() {}

  ngOnInit() {}

  sortByColumn(sortByColumn: string) {
    this.sortColumn = sortByColumn;
  }
}