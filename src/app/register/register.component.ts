import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgControlStatus,
} from '@angular/forms';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { ValidateFormService } from '../services/validate-form.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  baseUrl: string = 'http://localhost:80/crudTest/';

  registerForm!: FormGroup;
  validateAllFormFields = this.validateFormService.validateAllFormFields;

  constructor(
    private fb: FormBuilder,
    private validateFormService: ValidateFormService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      gender: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('register form: ', this.registerForm.value);
      this.http
        .post(this.baseUrl + 'register.php', {
          name: this.registerForm.value.name,
          age: this.registerForm.value.age,
          phone: this.registerForm.value.phone,
          height: this.registerForm.value.height,
          weight: this.registerForm.value.weight,
          gender: this.registerForm.value.gender,
          username: this.registerForm.value.username,
          password: this.registerForm.value.password,
        })
        .subscribe((data: any) => {
          console.log(data);
          alert('Register Success');
        });
    } else {
      this.validateAllFormFields(this.registerForm);
      alert('Please fill all the fields');
    }
  }
}
