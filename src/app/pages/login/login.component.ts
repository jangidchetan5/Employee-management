import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/core/services/auth.service";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
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
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });

    if(this.authServe.loggedIn()){
      this.route.navigate(['/dashboard/employeelist'])
    }
  }

  ngOnInit(): void {}
  //form submit method
  submit() {
    this.loader = true;
    this.spinner.show();
    this.authServe.loginUser(this.myForm.value).subscribe(
      (res: any) => {
        this.loader = false;
        localStorage.setItem("token", res.token);
        this.route.navigate(["/dashboard/employeelist"]);
      },
      (err) => {
        this.loader = false;
        this.toastr.error(err.error.message, "Error");
      }
    );
  }
}
