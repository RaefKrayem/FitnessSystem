import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Exercises } from '../classes/Exercises';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
})
export class WorkoutsComponent implements OnInit {
  baseUrl = this.data.baseUrl;
  uID = this.data.loggedInUserId;
  completeExForm!: FormGroup;
  exercises: Exercises[] = this.data.exercises;

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

  completeExercise(exerciseId: any) {
    this.http
      .post(this.baseUrl + 'completeEx.php', {
        UserId: this.data.loggedInUserId,
        ExId: exerciseId,
        Weight: this.completeExForm.value.weight,
        Reps: this.completeExForm.value.repetitions,
      })
      .subscribe();
  }

  unCompleteExercise(exerciseId: any) {
    this.http
      .post(this.baseUrl + 'unCompleteEx.php', {
        UserId: this.data.loggedInUserId,
        ExId: exerciseId,
        Weight: this.completeExForm.value.weight,
        Reps: this.completeExForm.value.repetitions,
      })
      .subscribe();
  }
}
