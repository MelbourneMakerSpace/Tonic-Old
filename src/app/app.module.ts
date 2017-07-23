import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { MenuComponent } from "./components/menu/menu.component";
import { HeaderComponent } from "./components/header/header.component";
import { MemberListComponent } from "./components/member-list/member-list.component";
import { MemberDetailsComponent } from "./components/member-details/member-details.component";
import { MemberPlansComponent } from "./components/member-plans/member-plans.component";
import { MemberKeysComponent } from "./components/member-keys/member-keys.component";
import { MemberPaymentsComponent } from "./components/member-payments/member-payments.component";
import { MemberPictureComponent } from "./components/member-picture/member-picture.component";
import { MemberEditComponent } from "./components/member-edit/member-edit.component";
import { MemberStatsComponent } from "./components/member-stats/member-stats.component";
import { SortGridComponent } from "./components/sort-grid/sort-grid.component";
import { OrderPipe } from "./pipes/sort.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
    MemberListComponent,
    MemberDetailsComponent,
    MemberPlansComponent,
    MemberKeysComponent,
    MemberPaymentsComponent,
    MemberPictureComponent,
    MemberEditComponent,
    MemberStatsComponent,
    SortGridComponent,
    OrderPipe
  ],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
