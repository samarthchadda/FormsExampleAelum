import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    CreateUserComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    Ng2TelInputModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    UsersRoutingModule
  ]
})
export class UsersModule { }
