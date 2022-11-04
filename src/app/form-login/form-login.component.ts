import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpService) {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login() {
    if(this.isValidForm()) {
      this.http.login(this.createPayload()).subscribe()
    }
  }
  isValidForm(): boolean {
    return this.form.valid;
  }

  onClick() {
    console.log(this.form)
  }

  getValueControl(form: any, control: string) {
    return form.controls[control].value
  }

  createPayload(
    email = this.getValueControl(this.form, 'email'),
    password = this.getValueControl(this.form, 'password')) {

      const payload = {
        email,
        password
      }

      return payload;

  }
}
