import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MemberEditComponent } from "./components/member-edit/member-edit.component";
import { SortGridComponent } from "./components/sort-grid/sort-grid.component";
import { MemberListComponent } from "./components/member-list/member-list.component";
import { MemberPaymentsComponent } from "./components/member-payments/member-payments.component";
import {KeysGridComponent} from "./components/keys-grid/keys-grid.component"
import { PlansGridComponent } from "./components/plans-grid/plans-grid.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "member-edit",
    component: MemberEditComponent
  },
  {
    path: "grid",
    component: SortGridComponent
  },
  {
    path: "members",
    component: MemberListComponent
  },
  {
    path: "plans",
    component: PlansGridComponent
  },
  {
    path: "payment",
    component: MemberPaymentsComponent
  },
  {
    path: "keys",
    component: KeysGridComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
