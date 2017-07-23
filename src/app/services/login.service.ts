import { Injectable, EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs/rx";

@Injectable()
export class LoginService {
  constructor() {}

  login(email: string, password: string) {}

  logout() {}
}
