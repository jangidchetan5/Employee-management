import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent implements OnInit {

  constructor(public auth:AuthService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openResetPasswordDialog(){
    this.dialog.open(ResetpasswordComponent)

  }

}
