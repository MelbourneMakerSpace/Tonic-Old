import { Component, OnInit } from "@angular/core";
import { OrderPipe } from "../../pipes/sort.pipe";

@Component({
  selector: "app-sort-grid",
  templateUrl: "./sort-grid.component.html",
  styleUrls: ["./sort-grid.component.css"]
})
export class SortGridComponent implements OnInit {
  data: Array<Member> = new Array<Member>();
  sortColumn: string = "Plan";

  constructor() {
    this.data.push(
      new Member(
        "Tony Bellomo",
        "tony.bellomo@gmail.com",
        "full",
        0.0,
        "Active",
        "555-1234"
      ),
      new Member(
        "Tony Bellomo2",
        "tony.bellomo@gmail.com",
        "Half",
        5.0,
        "Active",
        "555-1234"
      ),
      new Member(
        "Tony Bellomo3",
        "tony.bellomo@gmail.com",
        "Free",
        20.0,
        "Disabled",
        "555-1234"
      )
    );
  }

  ngOnInit() {}

  sortByColumn(sortByColumn: string) {
    this.sortColumn = sortByColumn;
  }
}

export class Member {
  Name: string;
  Email: string;
  Plan: string;
  Balance: number;
  Status: string;
  Phone: string;

  constructor(
    Name: string,
    Email: string,
    Plan: string,
    Balance: number,
    Status: string,
    Phone: string
  ) {
    this.Name = Name;
    this.Email = Email;
    this.Plan = Plan;
    this.Balance = Balance;
    this.Status = Status;
    this.Phone = Phone;
  }
}
