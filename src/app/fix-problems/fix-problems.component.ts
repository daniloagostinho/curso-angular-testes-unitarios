import { Component, OnInit } from '@angular/core';
import { StubComponent } from '../stub/stub.component';

import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fix-problems',
  templateUrl: './fix-problems.component.html',
  styleUrls: ['./fix-problems.component.scss']
})
export class FixProblemsComponent implements OnInit {
  form!: FormGroup;
  price: number = 0;
  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  openDialog(): void {
   this.dialog.open(StubComponent, {
      width: '250px',
      data: {}
    });
  }

}
