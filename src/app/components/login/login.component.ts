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
  }

  // tryLogin() {
  //   this.testingLogin = true;
  //   this.loginService.login(this.login, this.password).subscribe(
  //     x => {
  //       //localStorage.setItem("creds", JSON.stringify(x));

  //       this.testingLogin = false;
  //       if (this.route.snapshot.params["path"]) {
  //         if (!this.route.snapshot.params["value"]) {
  //           console.log(
  //             `routing to path |${this.route.snapshot.params["path"]}|`
  //           );
  //           this.router.navigate([`/${this.route.snapshot.params["path"]}`]);
  //         } else {
  //           console.log(
  //             `routing to path |${this.route.snapshot.params["path"]}/${this
  //               .route.snapshot.params["value"]}|{`
  //           );
  //           this.router.navigate([
  //             `/${this.route.snapshot.params["path"]}/${this.route.snapshot
  //               .params["value"]}`
  //           ]);
  //         }
  //       } else {
  //         this.router.navigate(["/Dashboard"]);
  //       }
  //     },
  //     error => {
  //       this.badLogin = true;
  //       this.testingLogin = false;
  //       console.log(error);
  //     }
  //   );
  //}
}
