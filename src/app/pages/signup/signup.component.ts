import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  loader = false;
  constructor(
    private toastr: ToastrService,
    private route: Router,
    private authServe: AuthService,
    private spinner: NgxSpinnerService
  ) {
    //reactive form
    this.myForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      areaOfWork: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    if(this.authServe.loggedIn()){
      this.route.navigate(['/dashboard/employeelist'])
    }
  }

  ngOnInit(): void { }
  //submit method
  submit() {
    this.loader = true;
    this.spinner.show();
    this.authServe.registerUser(this.myForm.value).subscribe(
      (res) => {
        this.loader = false;
        this.toastr.success('Account Created', 'message');
        this.route.navigate(['/dashboard/employeelist']);
      },
      (err) => {
        //for mongo error
        if (err.status == '500') {
          this.loader = false;
          this.toastr.error('Email already taken', 'Error');
        } else {
          this.loader = false;
          this.toastr.error(err.error.message, 'Error');
        }
      }
    );
  }
}
