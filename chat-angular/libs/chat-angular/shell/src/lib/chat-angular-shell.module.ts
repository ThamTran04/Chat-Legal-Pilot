import { chatAngularShellRoutes } from './chat-angular-shell.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(chatAngularShellRoutes)],
  exports: [RouterModule],
})
export class ChatAngularShellModule {}
