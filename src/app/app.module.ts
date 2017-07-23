import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { MenuComponent } from './components/menu/menu.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MenuComponent, MemberEditComponent],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
