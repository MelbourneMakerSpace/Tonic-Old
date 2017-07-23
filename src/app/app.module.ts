import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { MenuComponent } from './components/menu/menu.component';
<<<<<<< HEAD
import { MemberEditComponent } from './components/member-edit/member-edit.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MenuComponent, MemberEditComponent],
=======
import { HeaderComponent } from './components/header/header.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberPlansComponent } from './components/member-plans/member-plans.component';
import { MemberKeysComponent } from './components/member-keys/member-keys.component';
import { MemberPaymentsComponent } from './components/member-payments/member-payments.component';
import { MemberPictureComponent } from './components/member-picture/member-picture.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MenuComponent, HeaderComponent, MemberListComponent, MemberDetailsComponent, MemberPlansComponent, MemberKeysComponent, MemberPaymentsComponent, MemberPictureComponent],
>>>>>>> 28ef15da956ed0a0c53dfb98cc8b6e3964063a85
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
