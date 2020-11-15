import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;

  constructor(private loginService:LoginService, private fb:FormBuilder,
    private router:Router) {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    const formVal= this.loginForm.value;
    this.loginService.validateLogin(formVal.user,formVal.password).then(
      res=>{
        this.router.navigate(['/home']);
        localStorage.setItem('authCode',res.authCode);
      },
      err=>{
        console.log(err);
        
      }
    )
    console.log(this.loginForm);

  }
}
