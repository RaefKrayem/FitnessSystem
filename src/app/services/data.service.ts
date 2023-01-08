import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Users } from '../classes/Users';
import { WorkoutsComponent } from '../workouts/workouts.component';
import { Exercises } from '../classes/Exercises';
import { AdvExercises } from '../classes/AdvExercises';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = 'http://localhost:80/crudTest/';
  loggedInUserId: any;
  exercises: Exercises[] = [];
  advExercises: AdvExercises[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    return this.http.get<Users[]>(this.baseUrl + 'view.php');
  }

  displayWorkouts(muscleGroup: string, level: string) {
    this.http
      .post(this.baseUrl + 'displayWorkouts.php', {
        muscleGroup: muscleGroup,
        level: level,
      })
      .subscribe((result: any) => {
        if (result['success']) {
          console.log(result['records']);
          this.exercises = result['records'];
          this.router.navigate(['/workouts']);
        } else {
          console.log('error displaying exercises');
        }
      });
  }

  displayAdvWorkouts(daysNum: number) {
    this.http
      .post(this.baseUrl + 'displayAdvWorkouts.php', {
        daysNum: daysNum,
      })
      .subscribe((result: any) => {
        if (result['success']) {
          console.log(result['records']);
          this.advExercises = result['records'];
          this.router.navigate(['/advanced']);
        } else {
          console.log('error displaying exercises');
        }
      });
  }
}
