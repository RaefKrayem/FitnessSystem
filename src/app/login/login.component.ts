import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ValidateFormService } from '../services/validate-form.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  baseUrl: string = 'http://localhost:80/crudTest/';
  validateAllFormFields = this.validateFormService.validateAllFormFields;

  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private http: HttpClient,
    private validateFormService: ValidateFormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.LoginForm.valid) {
      console.log('user: ', this.LoginForm.value.username);
      console.log('password: ', this.LoginForm.value.password);
      this.http
        .post(this.baseUrl + 'login.php', {
          username: this.LoginForm.value.username,
          password: this.LoginForm.value.password,
        })
        .subscribe((result: any) => {
          this.data.loggedInUserId = result.user.ID;
          if (result['success']) {
            this.router.navigate(['/home']);
          } else {
            alert('Invalid username or password');
          }
        });
    } else {
      this.validateAllFormFields(this.LoginForm);
      alert('Please fill all the fields');
    }
  }
}
