import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl,ValidatorFn  } from '@angular/forms';
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
    private fb: FormBuilder,
    private formBuilder: FormBuilder) {}

  isBusy:boolean=false;
  message:string='';
  KeePme:boolean=false;

  signupForm = this.fb.group({
    username: ['',[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern('09[0-9]{9}')]],
    password: ['',[Validators.required,Validators.maxLength(8),Validators.minLength(8),Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')]],
    repeatpassword: ['',[Validators.required,Validators.maxLength(8),Validators.minLength(8),Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')]],
    fullname: ['',[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern(/^[\u0600-\u06FF\s]+$/)]],
    address: ['',[Validators.required,Validators.pattern(/^[\u0600-\u06FF\s]+$/)]],
    email: ['',[Validators.required]],
    type: ['',[Validators.required]],
  });

  signup(){
    this.isBusy = true;
    let username: string | undefined = this.signupForm.controls.username .value?.toString();
    let password: string | undefined = this.signupForm.controls.password.value?.toString();
    let fullname: string | undefined = this.signupForm.controls.fullname.value?.toString();
    let address: string | undefined = this.signupForm.controls.fullname.value?.toString();
    let email: string | undefined = this.signupForm.controls.email.value?.toString();
    let type: number | undefined = Number (this.signupForm.controls.type.value?.toString());
    this.backend.signup(username??'',password??'',type??3,fullname??'',email??'')

    .subscribe(r =>
    {
    this._snackBar.open('ثبت نام با موفقیت انجام شد','',{
        duration:2000
      }).afterDismissed().subscribe(t=>{
        this.router.navigate(['/signin']);
      });
    });
  }
  passwordsMatching = false;
  confirmPasswordClass = 'form-control';

  username = new FormControl(null, [
    Validators.required,
    Validators.pattern('09[0-9]{9}'),
  ]);
  
  Password = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})'),
  ]);

  fullname = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(/^[\u0600-\u06FF\s]+$/),
  ]);

  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})'),
  ]);

  resetPasswordForm = this.formBuilder.group({
    Password: this.Password,
    confirmPassword: this.confirmPassword,
  });

  onSubmit(): void {
    if (!this.resetPasswordForm?.valid) {
      return;
    }
  }

  checkPasswords(pw: string, cpw: string) {
    if (pw == cpw) {
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
    } else {
      this.passwordsMatching = false;
      this.confirmPasswordClass = 'form-control is-invalid';
    }
  }
}
