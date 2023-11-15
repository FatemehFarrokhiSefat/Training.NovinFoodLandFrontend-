import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl,ValidatorFn  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { BackendSecurityService } from 'src/app/+services/backend-security.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  ConfirmedValidator(arg0: string, arg1: string): any {
    throw new Error('Method not implemented.');
  }

  constructor(private backend: BackendSecurityService, 
    private  _snackBar: MatSnackBar, 
    private router:Router,
    private fb: FormBuilder,
    private formBuilder: FormBuilder) {}

  isBusy:boolean=false;
  message:string='';
  KeePme:boolean=false;
  
  signupForm = this.fb.group({
    username: ['',[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern('09[0-9]{9}')]],
    password: ['',[Validators.required,Validators.maxLength(8),Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).*$')]],
    repeatpassword: ['',[Validators.required,Validators.maxLength(8),Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).*$')]],
    fullname: ['',[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern(/^[\u0600-\u06FF\s]+$/)]],
    address: ['',[Validators.required,Validators.pattern(/^[\u0600-\u06FF\s]+$/)]],
    email: ['',[Validators.required]],
    type: ['',[Validators.required]],
  },
  {
    validator: this.MustMatch('password', 'repeatpassword')
  }
  );
  
  signup(){
    this.isBusy = true;
    let username: string | undefined = this.signupForm.controls['username'] .value?.toString();
    let password: string | undefined = this.signupForm.controls['password'].value?.toString();
    let fullname: string | undefined = this.signupForm.controls['fullname'].value?.toString();
    let address: string | undefined = this.signupForm.controls['address'].value?.toString();
    let email: string | undefined = this.signupForm.controls['email'].value?.toString();
    let type: number | undefined = Number (this.signupForm.controls['type'].value?.toString());

    this.backend.signup(username??'',password??'',type??3,fullname??'',email??'')
      .subscribe(r =>
      {
        if(r && (r as any).serverError)
        {
          this.isBusy=false;
          this.message=(r as any).serverError;
        }
        else
        {
          this._snackBar.open('ثبت نام با موفقیت انجام شد','',{
            duration:2000
          }).afterDismissed().subscribe(t=>{
            this.router.navigate(['/signin']);
          });
        }
      }
    );
    // console.log(this.signupForm);
  }

  // handleError(error:HttpErrorResponse){
  //   console.log(error);
  //   return "ok";
  // }
  
  fullname = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(/^[\u0600-\u06FF\s]+$/),
  ]);

  username = new FormControl(null, [
    Validators.required,
    Validators.pattern('09[0-9]{9}'),
  ]);

  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';

  Password = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).*$'),
  ]);

  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).*$'),
  ]);

  resetPasswordForm = this.formBuilder.group({
    Password: this.Password,
    confirmPassword: this.confirmPassword,
  }
  );

  onSubmit(): void {
    console.log(this.resetPasswordForm);
    if (!this.resetPasswordForm?.valid) {
      return;
    }
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
  
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}