import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

function countdownConfigFactory() {
  return { format: 'mm:ss' };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CountdownModule,
    AppRoutingModule
  ],
  providers: [{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }
