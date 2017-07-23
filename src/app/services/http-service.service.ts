import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
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

  DELETE(data: string): string {
    return "not implemented";
  }
}
