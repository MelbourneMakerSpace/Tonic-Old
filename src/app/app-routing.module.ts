import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MemberEditComponent } from "./components/member-edit/member-edit.component";
import { SortGridComponent } from "./components/sort-grid/sort-grid.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
