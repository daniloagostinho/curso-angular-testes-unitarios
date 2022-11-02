import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handle-event',
  templateUrl: './handle-event.component.html',
  styleUrls: ['./handle-event.component.scss']
})
export class HandleEventComponent implements OnInit {
  emoji: any;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.emoji = '👨‍🎓';
  }

}
