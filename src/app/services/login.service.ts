import { Injectable, EventEmitter } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/rx";
import { Http, Response, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class LoginService {
  constructor(private http: Http) {}

  login(email: string, password: string): Observable<Response> {
    let results: any;

    var options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    });

    let body = `credentials={"username":"${email}","password":"${password}"}`;

    return this.http.post(environment.APIURL + "login", body, options);
  }

  logout() {}
}
