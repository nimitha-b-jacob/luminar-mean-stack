import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  depositform=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  withdrawform=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  user=this.dataService.currentuser

  constructor(private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit()
  {
   if(this.depositform.valid)
   {  
    var acno=this.depositform.value.acno
    var pswd=this.depositform.value.pwd
    var amount=this.depositform.value.amount
    const result=this.dataService.deposit(acno,pswd,amount)
    if(result)
    {
      alert("the given amount"+amount+"credited..and new balance is:"+result)
    } 
  }
  else{
    alert("invalid form")
  }
  }
  withdraw()
  {
    if(this.withdrawform.valid)
   { 
    var acno=this.withdrawform.value.acno
    var pswd=this.withdrawform.value.pwd
    var amount=this.withdrawform.value.amount
   const result= this.dataService.withdraw(acno,pswd,amount)
   if(result)
    {
      alert("the given amount"+amount+"debited..and new balance is:"+result)
    } 
  }
    else{
      alert("invalid form")
    }
  }

}
