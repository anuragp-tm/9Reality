import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup,FormsModule, ReactiveFormsModule, NgForm  } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public formGroup: FormGroup;
  public admin: any;

  constructor(public formBuilder: FormBuilder ) {
    this.formGroup = formBuilder.group({
      fullnameControl: ['',Validators.required],
      usernameControl:['',Validators.required],
      emailControl:['',Validators.required,Validators.email],
      mobileControl:['',Validators.required],
      passControl:['',Validators.required],
      cpassControl:['',Validators.required]

  });
  this.admin = {
    fullname: null,
    username: null,
    email: null,
    mobile: null,
    password: null
  };

   }

  ngOnInit() {
  }
  register(form: NgForm){
    console.log(this.formGroup.value);
    this.admin={
      fullname:this.formGroup.controls.fullnameContol.value,
      username: this.formGroup.controls.usernameContol.value,
      email:this.formGroup.controls.emailControl.value,
      mobile:this.formGroup.controls.mobileControl.value,
      password:this.formGroup.controls.cpassControl.value
    };
    console.log(this.admin);
  }

}
