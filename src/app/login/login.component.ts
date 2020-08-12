import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  public registerForm = false;
  public postView = false;
  loginData: any;
  user: Promise<boolean>;
  credButton: number;
  constructor(
    private formBuilder: FormBuilder, public router: Router,private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.credButton = +params['tab']
      if(this.credButton === 2){
        this.postView = true;
        this.registerForm = true;
      }
      console.log(params);
    });
   }


  ngOnInit() {
  //let Navigation =this.router.getCurrentNavigation().extras.state;
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.loginData = this.loginForm.value
    this.postView = true;
    this.user = this.loginData.email;
    this.router.navigate(['Posts']);
    console.log(this.loginForm.value);
  }

}
