import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendSecurityService } from 'src/app/+services/backend-security.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private backend: BackendSecurityService, 
    private  _snackBar: MatSnackBar, 
    private router:Router,
    private fb: FormBuilder) {}

  isBusy:boolean=false;
  message:string='';
  KeePme:boolean=false;

  signupForm = this.fb.group({
    username: ['',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
    password: ['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
    fullname: ['',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
    email: ['',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
    type: ['',[Validators.required]],
  });

  signup(){
    this.isBusy = true;
    let username: string | undefined = this.signupForm.controls.username .value?.toString();
    let password: string | undefined = this.signupForm.controls.password.value?.toString();
    let fullname: string | undefined = this.signupForm.controls.fullname.value?.toString();
    let email: string | undefined = this.signupForm.controls.email.value?.toString();
    let type: number | undefined = Number (this.signupForm.controls.type.value?.toString());
    this.backend.signup(username??'', password??'',type??3,fullname??'',email??'')
    .subscribe(r =>
    {
    this._snackBar.open('ثبت نام با موفقیت انجام شد','',{
        duration:2000
      }).afterDismissed().subscribe(t=>{
        this.router.navigate(['/signin']);
      });
    });
  }
}
