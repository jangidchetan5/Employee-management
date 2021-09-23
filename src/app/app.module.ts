import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { EmployeeListComponent } from './components/sidebar/employee-list/employee-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateDialogComponent } from './components/sidebar/employee-list/update-dialog/update-dialog.component';
import { AddDialogComponent } from './components/sidebar/employee-list/add-dialog/add-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HolidaysComponent } from './components/sidebar/holidays/holidays.component';
import { HolidayDialogComponent } from './components/sidebar/holidays/holiday-dialog/holiday-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateHolidayDialogComponent } from './components/sidebar/holidays/update-holiday-dialog/update-holiday-dialog.component';
import { LeavesAdminComponent } from './components/sidebar/leaves-admin/leaves-admin.component';
import { UpdateLeavesAdminComponent } from './components/sidebar/leaves-admin/update-leaves-admin/update-leaves-admin.component';
import { AddLeavesAdminComponent } from './components/sidebar/leaves-admin/add-leaves-admin/add-leaves-admin.component';
import { DepartmentsComponent } from './components/sidebar/departments/departments.component';
import { AddDepartmentComponent } from './components/sidebar/departments/add-department/add-department.component';
import { UpdateDepartmentComponent } from './components/sidebar/departments/update-department/update-department.component';
import { DesignationsComponent } from './components/sidebar/designations/designations.component';
import { AddDesignationsComponent } from './components/sidebar/designations/add-designations/add-designations.component';
import { UpdateDesignationsComponent } from './components/sidebar/designations/update-designations/update-designations.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    EmployeeListComponent,
    UpdateDialogComponent,
    AddDialogComponent,
    HolidaysComponent,
    HolidayDialogComponent,
    UpdateHolidayDialogComponent,
    LeavesAdminComponent,
    UpdateLeavesAdminComponent,
    AddLeavesAdminComponent,
    DepartmentsComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    DesignationsComponent,
    AddDesignationsComponent,
    UpdateDesignationsComponent
  ],
  entryComponents:[UpdateDialogComponent,AddDialogComponent,HolidayDialogComponent,UpdateHolidayDialogComponent,UpdateLeavesAdminComponent,AddLeavesAdminComponent,AddDepartmentComponent,UpdateDepartmentComponent,AddDesignationsComponent,UpdateDesignationsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      progressBar: true,
      positionClass: 'toast-top-right',
    }),
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule
   

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
