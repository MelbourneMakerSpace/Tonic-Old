import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MemberEditComponent } from "./components/member-edit/member-edit.component";
import { SortGridComponent } from "./components/sort-grid/sort-grid.component";
import { MemberListComponent } from "./components/member-list/member-list.component";
<<<<<<< HEAD
import { PlansGridComponent } from "./components/plans-grid/plans-grid.component";
=======
import { MemberPaymentsComponent } from "./components/member-payments/member-payments.component";
import {KeysGridComponent} from "./components/keys-grid/keys-grid.component"
>>>>>>> 06cc1787c32db1a67c1deefa573952be5ac7b219

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
    path: "members",
    component: MemberListComponent
  },
  {
    path: "payment",
    component: MemberPaymentsComponent
  },
  {
    path: "keys",
    component: KeysGridComponent
>>>>>>> 06cc1787c32db1a67c1deefa573952be5ac7b219
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
