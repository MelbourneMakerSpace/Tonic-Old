import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MemberEditComponent } from "./components/member-edit/member-edit.component";
import { SortGridComponent } from "./components/sort-grid/sort-grid.component";
import { MemberListComponent } from "./components/member-list/member-list.component";
<<<<<<< HEAD
import { PlansGridComponent } from "./components/plans-grid/plans-grid.component";
import { MemberPaymentsComponent } from "./components/member-payments/member-payments.component";
import { KeysGridComponent } from "./components/keys-grid/keys-grid.component";
=======
import { MemberPaymentsComponent } from "./components/member-payments/member-payments.component";
import {KeysGridComponent} from "./components/keys-grid/keys-grid.component"
import { PlansGridComponent } from "./components/plans-grid/plans-grid.component";
>>>>>>> 273d33a2fdfc6c462e95195512f56d2a7cd5f542

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "member-edit/:id",
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
<<<<<<< HEAD
    path: "members",
    component: MemberListComponent
=======
    path: "plans",
    component: PlansGridComponent
>>>>>>> 273d33a2fdfc6c462e95195512f56d2a7cd5f542
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
