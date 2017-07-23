import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.css"]
})
export class MemberListComponent implements OnInit {
  data: Array<Member> = new Array<Member>();
  sortColumn: string = "Plan";
  constructor() {
    this.data.push(
      new Member(
        1,
        "Tony Bellomo",
        "tony.bellomo@gmail.com",
        "full",
        0.0,
        "Active",
        "555-1234"
      ),
      new Member(
        2,
        "Tony Bellomo2",
        "tony.bellomo@gmail.com",
        "Half",
        5.0,
        "Active",
        "555-1234"
      ),
      new Member(
        3,
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
  ID: number;
  Name: string;
  Email: string;
  Plan: string;
  Balance: number;
  Status: string;
  Phone: string;

  constructor(
    ID: number,
    Name: string,
    Email: string,
    Plan: string,
    Balance: number,
    Status: string,
    Phone: string
  ) {
    this.ID = ID;
    this.Name = Name;
    this.Email = Email;
    this.Plan = Plan;
    this.Balance = Balance;
    this.Status = Status;
    this.Phone = Phone;
  }
}
