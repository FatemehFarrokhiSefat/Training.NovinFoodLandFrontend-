import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendSecurityService } from 'src/app/+services/backend-security.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  constructor(private backend: BackendSecurityService, 
    private  _snackBar: MatSnackBar, 
    private router:Router) {}

  isBusy:boolean=false;
  message:string='';
  KeePme:boolean=false;
  usernameFormControl = new FormControl('', [Validators.required,Validators.maxLength(11)]);
  passwordFormControl = new FormControl('', [Validators.required,Validators.maxLength(11)]);
  
  check() {
    this.isBusy = true;
    let username: string | undefined = this.usernameFormControl.value?.toString();
    let password: string | undefined = this.passwordFormControl.value?.toString();

    this.backend.signin(username ?? '', password ?? '').subscribe((r) => 
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
        case 'RestaurantOwner':
        this.router.navigate(['/restaurants']);
        break;
        case 'Customer':
        this.router.navigate(['/customers']);
        break;
      }
    }
      this.isBusy = false;
    });    
  }

}
