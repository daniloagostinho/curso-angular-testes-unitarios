import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts-tests',
  templateUrl: './concepts-tests.component.html',
  styleUrls: ['./concepts-tests.component.scss']
})
export class ConceptsTestsComponent implements OnInit {
  name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
