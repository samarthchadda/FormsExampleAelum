import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  dialCode:string = '';

  constructor(
    private toastr:ToastrService,
    private routerBtn:Router
  ) { }

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
    this.toastr.success("Form Submitted Successfully");
    this.routerBtn.navigate(['/users']);
  }

  getCountryCode(eventInfo:any)
  {
    // console.log(eventInfo.dialCode);
    this.dialCode = "+"+eventInfo.dialCode;
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

}
