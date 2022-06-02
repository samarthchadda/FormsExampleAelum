import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  dialCode:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    if(this.dialCode=='')
    {
      form.value.telephone = "+1-"+ form.value.telephone;
    }
    else{
      form.value.telephone = this.dialCode +"-"+ form.value.telephone;
    }
    console.log(form.value);
  }

  getCountryCode(eventInfo:any)
  {
    console.log(eventInfo.dialCode);
    this.dialCode = "+"+eventInfo.dialCode;
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

}
