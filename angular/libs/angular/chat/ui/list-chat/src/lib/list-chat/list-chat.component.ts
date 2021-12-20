import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
