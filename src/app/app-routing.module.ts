import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
