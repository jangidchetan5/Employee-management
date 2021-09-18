import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './sidenav/home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './sidenav/home/home.component';

// const routes: Routes = [
  

//   {
//   path:'',
  
//   redirectTo:'login',
//   pathMatch:'full'
//   },


//   {
//     path:'login',
//     component:LoginComponent
//   },
//   {
//     path:'signup',
//     component:SignupComponent
//   },
//   {
//     path:'sidenav',
//     component:SidenavComponent,
//     canActivate:[AuthGuard]
//   },
 
//   {
//     path:'home',
//     component:HomeComponent,
//     canActivate:[AuthGuard],
    
//   }
 
 
// ];

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {path:'signup',component:SignupComponent},
  {
    path: "sidenav",
    component: SidenavComponent,
    canActivate:[AuthGuard],

    children: [
      { path: "", pathMatch: "full", redirectTo: "home" },

      { path: "home", component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
