import { authInterceptorProvider } from './../../../../libs/angular/auth/util/src/lib/interceptors/auth.interceptor';
// import { authInterceptorProvider } from '@angular/angular/auth/util';
import { AngularShellModule } from '@angular/angular/shell';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularShellModule, HttpClientModule],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
