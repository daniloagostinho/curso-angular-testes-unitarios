import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



interface MenuItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  user: any;

  menuItems: MenuItem[] = [
    { label: 'Item 1', value: 'item-1' },
    { label: 'Item 2', value: 'item-2' },
    { label: 'Item 3', value: 'item-3' },
  ];


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.user = {name: 'Danilo', email: 'danilodev.silva@gmail.com', password: '091011'}
  }

  getUserMessage(event: any) {
    console.log('Mensagem do filho: ', event)
  }

  goTo(route: string) {
    this.router.navigate([`/${route}`])
  }

  onMenuItemSelected(item: string) {
    console.log('item selecionado -->> ', item)
  }

}
