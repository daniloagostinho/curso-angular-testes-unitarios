import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  user: any;

  ngOnInit(): void {
    this.user = {name: 'Danilo', email: 'danilodev.silva@gmail.com', password: '091011'}
  }

  getUserMessage(event: any) {
    console.log('Mensagem do filho: ', event)
  }

}
