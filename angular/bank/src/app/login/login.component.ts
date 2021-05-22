import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ab="welcome"
  accno=""
  pwd=""
  
  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  
  login()
  {
    var acno=this.accno
    var pwd=this.pwd
    const result=this.dataService.login(acno,pwd)
    if(result)
    {
      alert("login")
      this.router.navigateByUrl("dashboard")

    }
  }
  register()
  {
    this.router.navigateByUrl("register")
   
  }
}
