import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentsComponent } from "./components/sidebar/departments/departments.component";
import { DesignationsComponent } from "./components/sidebar/designations/designations.component";
import { EmployeeListComponent } from "./components/sidebar/employee-list/employee-list.component";
import { HolidaysComponent } from "./components/sidebar/holidays/holidays.component";
import { LeavesAdminComponent } from "./components/sidebar/leaves-admin/leaves-admin.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "dashboard",
    component: SidebarComponent,

    children: [
      { path: "", pathMatch: "full", redirectTo: "signup" },

      { path: "signup", component: SignupComponent },
      {path:"employeelist",component:EmployeeListComponent},
      {path:"holidays",component:HolidaysComponent},
      {path:"leavesadmin",component:LeavesAdminComponent},
      {path:'departments',component:DepartmentsComponent},
      {path:'designations',component:DesignationsComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
