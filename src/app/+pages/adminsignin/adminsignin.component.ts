import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendSecurityService } from 'src/app/+services/backend-security.service';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.css'],
})
export class AdminsigninComponent {
  constructor(private backend: BackendSecurityService, 
    private  _snackBar: MatSnackBar, 
    private router:Router) {}

  isBusy:boolean=false;
  message:string='';
  KeePme:boolean=false;
  usernameFormControl = new FormControl('', [Validators.required,Validators.maxLength(5),Validators.minLength(5)]);
  passwordFormControl = new FormControl('', [Validators.required,Validators.maxLength(5),Validators.minLength(5)]);
  
  check() {
    this.isBusy = true;
    let username: string | undefined = this.usernameFormControl.value?.toString();
    let password: string | undefined = this.passwordFormControl.value?.toString();

    this.backend.adminsignin(username ?? '', password ?? '').subscribe((r) => 
    {
    let result= r as any;
    if(result.isOK==false)
    {
      this.message=(r as any).message;
      this._snackBar.open(this.message,'',{duration:4000});
      this.passwordFormControl.setValue('');
    }
    else
    {
        sessionStorage.setItem('token',result.token);
      if(this.KeePme==true)
      {
        localStorage.setItem('token',result.token);
      }    
      switch(result.type){
        case'AdminSystem':
        this.router.navigate(['/admins']);
        break;
      }
    }
      this.isBusy = false;
    });    
  }

}
