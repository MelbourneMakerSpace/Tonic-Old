import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../services/http-service.service";
import { Observable } from "rxjs/rx";
import { Http, Response } from "@angular/http";

@Component({
  selector: "app-rest-test",
  templateUrl: "./rest-test.component.html",
  styleUrls: ["./rest-test.component.css"]
})
export class RestTestComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  data: any;
  errorMessage: string;

  ngOnInit() {
    let response: Observable<Response> = this.httpService.GET("member/120");
    response.subscribe(
      data => {
        this.data = data.json()[0];
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
