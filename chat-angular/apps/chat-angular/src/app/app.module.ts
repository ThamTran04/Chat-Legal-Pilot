import { ChatAngularShellModule } from './../../../../libs/chat-angular/shell/src/lib/chat-angular-shell.module';
// import { ChatAngularShellModule } from '@chat-angular/chat-angular/shell';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChatAngularShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
