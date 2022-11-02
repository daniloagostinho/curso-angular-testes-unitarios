import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-detect-change',
  templateUrl: './auto-detect-change.component.html',
  styleUrls: ['./auto-detect-change.component.scss']
})
export class AutoDetectChangeComponent implements OnInit {
  emoji: any;
  constructor() { }

  ngOnInit(): void {
  }

  defineEmoji() {
    this.emoji = '👨‍🎓'
  }

}
