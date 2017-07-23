import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MemberEditComponent } from "./components/member-edit/member-edit.component";
import { SortGridComponent } from "./components/sort-grid/sort-grid.component";
import { MemberListComponent } from "./components/member-list/member-list.component";
import { PlansGridComponent } from "./components/plans-grid/plans-grid.component";
<<<<<<< HEAD
import { MemberPaymentsComponent } from "./components/member-payments/member-payments.component";
import {KeysGridComponent} from "./components/keys-grid/keys-grid.component"
=======
import { MemberPaymentsComponent } from "./components/member-payments/member-payments.component";
import { KeysGridComponent } from "./components/keys-grid/keys-grid.component";
=======
import { MemberPaymentsComponent } from "./components/member-payments/member-payments.component";
import {KeysGridComponent} from "./components/keys-grid/keys-grid.component"
import { PlansGridComponent } from "./components/plans-grid/plans-grid.component";
>>>>>>> 273d33a2fdfc6c462e95195512f56d2a7cd5f542
>>>>>>> 03338e0a61d497777d62dafa16b9fb2230b742ad

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
    path: "plans",
    component: PlansGridComponent
=======
<<<<<<< HEAD
    path: "members",
    component: MemberListComponent
=======
    path: "plans",
    component: PlansGridComponent
>>>>>>> 273d33a2fdfc6c462e95195512f56d2a7cd5f542
>>>>>>> 03338e0a61d497777d62dafa16b9fb2230b742ad
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
