import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss']
})
export class MenuDropdownComponent implements OnInit {

  constructor() { }

  @Input() label!: string;
  @Input() items: { label: string, value: any }[] = [];
  @Output() selected = new EventEmitter<any>();
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onItemSelected(item: { label: string, value: any }) {
    this.selected.emit(item.value);
    this.isOpen = false;
  }

  ngOnInit(): void {
  }

}
