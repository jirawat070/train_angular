import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fontSize = '';
  msg='';
  msg2='';
  color = '';
  number='';
  number2='' ; 
   result:Number;
   name ='';
   lname='';
  fullName='';
  constructor() { }

  ngOnInit() {
    this.msg = 'Jirawat Peankeaw';
    this.fontSize = '50px';
    this.color = '#F00';
    this.msg2 = '';
   
    this.number='';
    this.number2='';
    this.name='';
    this.lname='';
    this.fullName='';
  }

  setName(){
    return this.fullName = this.name + "  " + this.lname
  }
  clear(){
    this.number2='';
    this.number='';
    this.result=null;
    
  }
  
  sumNumer(){
    return this.result = Number(this.number) + Number(this.number2);
  }
  
  

}
