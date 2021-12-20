import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListChatComponent } from './list-chat/list-chat.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListChatComponent],
  exports: [ListChatComponent],
})
export class AngularChatUiListChatModule {}
