import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/rx";

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  GET(endpoint: string): Observable<Response> {
    let results: any;
    return this.http.get(environment.APIURL + endpoint);
  }

  PUT(data: string): string {
    return "not implemented";
  }

  POST(data: string): string {
    return "not implemented";
  }

  DELETE(endpoint: string, id: number) {
    // let results: any;
    // var options = new RequestOptions({
    //   headers: new Headers({
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   })
    // });
    // //let body = `_method={"username":"${email}","password":"${password}"}`;
    // //return this.http.post(environment.APIURL + "login", body, options);
  }
}
