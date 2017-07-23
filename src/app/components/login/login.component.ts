import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer,
  Output
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/rx";
import { LoginService } from "../../services/login.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styles: [],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  badLogin: boolean = false;
  testingLogin: boolean = false;

  tmpstring: any;

  login: string;
  password: string;
  @ViewChild("txtLogin") txtLogin: ElementRef;

  constructor(
    private router: Router,
    private renderer: Renderer,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.renderer.invokeElementMethod(this.txtLogin.nativeElement, "focus");
    this.login = "kirk";
    this.password = "git gud";
  }

  tryLogin() {
    this.testingLogin = true;
    this.loginService.login(this.login, this.password).subscribe(result => {
      this.tmpstring = result;
      console.dir(result);
    });
  }
}
