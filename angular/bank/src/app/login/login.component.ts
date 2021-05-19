import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ab="welcome"
  accno="account no please"
  pwd=""
  accountdetails:any = {
    1000: {
      acno: 1000,
      username: "userone",
      password: "userone",
      balance: 50000,
    },
    1001: {
      acno: 1001,
      username: "usertwo",
      password: "usertwo",
      balance: 5000,
    },
    1002: {
      acno: 1002,
      username: "userthree",
      password: "userthree",
      balance: 10000,
    },
    1003: {
      acno: 1003,
      username: "userfour",
      password: "userfour",
      balance: 6000,
    },
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  /*accnoChange(event:any)
  {
    this.accno=event.target.value;
    console.log(this.accno);
    
  }
  pswChange(event:any)
  {
    this.pwd=event.target.value;
    console.log(this.pwd);
    
  }*/
  login()
  {
    var acno=this.accno
    var pwd=this.pwd
    let users = this.accountdetails
  
    if (acno in users) 
    {
      if ((pwd == users[acno]["password"])) 
      {
        
        alert("success")
        this.router.navigateByUrl("dashboard")
      }
      else
      {
      alert("incorrect pswd")
        }
    }  
     else 
     {
       
      alert("no account")
    }
  }
  register()
  {
    this.router.navigateByUrl("register")
  }
}
