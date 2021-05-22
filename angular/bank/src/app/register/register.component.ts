import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
 registerform=this.fb.group({
   uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
   acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pwd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
 })
  constructor(private dataService:DataService, private route:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register()
  {
    console.log(this.registerform.get('uname').errors);
    if(this.registerform.get('uname')?.errors)
    {
      alert("invalid uname")
    }
    if(this.registerform.valid)
    {
      var acno=this.registerform.value.acno
      var uname=this.registerform.value.uname
      var pswd=this.registerform.value.pwd
      const result=this.dataService.register(acno,uname,pswd)
      if(result)
      {
        alert("successfully registered")
        this.route.navigateByUrl("")
      }
      else
      {
        alert("user exist") 
      }
    }
    else
    {
      alert("invalid form")
    }
    
    
}

}
