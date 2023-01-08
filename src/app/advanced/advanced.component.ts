import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Exercises } from '../classes/Exercises';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdvExercises } from '../classes/AdvExercises';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css'],
})
export class AdvancedComponent implements OnInit {
  baseUrl = this.data.baseUrl;
  uID = this.data.loggedInUserId;
  completeExForm!: FormGroup;
  advExercises: AdvExercises[] = this.data.advExercises;

  constructor(
    private data: DataService,
    private http: HttpClient,
    private fb: FormBuilder // private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.completeExForm = this.fb.group({
      weight: [''],
      repetitions: [''],
    });
  }

  // getSafeUrl(url: any) {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }

  completeExercise(exerciseId: any, split: any) {
    this.http
      .post(this.baseUrl + 'advComplete.php', {
        UserId: this.data.loggedInUserId,
        ExId: exerciseId,
        Weight: this.completeExForm.value.weight,
        Reps: this.completeExForm.value.repetitions,
        Splits: split,
      })
      .subscribe((data: any) => {
        console.log(data);
        alert('Complete Success');
      });
  }

  unCompleteExercise(exerciseId: any, split: any) {
    this.http
      .post(this.baseUrl + 'advUnComplete.php', {
        UserId: this.data.loggedInUserId,
        ExId: exerciseId,
        Weight: this.completeExForm.value.weight,
        Reps: this.completeExForm.value.repetitions,
        Splits: split,
      })
      .subscribe((data: any) => {
        console.log(data);
        alert('unComplete Success');
      });
  }
}
