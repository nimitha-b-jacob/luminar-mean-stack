import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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

  constructor() { }
  register(acno:any,uname:any,pswd:any)
  {
    let user=this.accountdetails
    if(acno in user)
    {
      
      return false
    }
    else{ 
      user[acno]={
       acno,
       username: uname,
       password: pswd,
       balance:0
      
    }
    return true
   
  }
  }
  login(acno:any,pwd:any)
  {
    let users = this.accountdetails
  
    if (acno in users) 
    {
      if ((pwd == users[acno]["password"])) 
      {
        
        
        return true
      }
      else
      {
      alert("incorrect pswd")
      return false
        }
    }  
     else 
     {
       
      alert("invalid account")
      return false
     }
  }
  deposit(acno:any,pwd:any,amt:any)
  {
    var amount=parseInt(amt)
    let users=this.accountdetails
    if (acno in users) 
    {
      if ((pwd == users[acno]["password"])) 
      {
        users[acno]["balance"]+=amount
        
        return users[acno]["balance"]
      }
      else
      {
      alert("incorrect pswd")
      return false
        }
    }  
     else 
     {
       
      alert("Invalid account")
      return false
     }
    }
     withdraw(acno:any,pwd:any,amt:any)
  {
    var amount=parseInt(amt)
    let users=this.accountdetails
    if (acno in users) 
    {
      if ((pwd == users[acno]["password"])) 
      {
        if(users[acno]["balance"]>amount)
        { 
        users[acno]["balance"]-=amount
        
        return users[acno]["balance"]
        }
        else
        {
          alert("insufficient balance")
          return false
        }
      }
      else
      {
      alert("incorrect pswd")
      return false
        }
    }  
     else 
     {
       
      alert("Invalid account")
      return false
     }
    

  }
}

