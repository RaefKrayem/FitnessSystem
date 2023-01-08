import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Levels = ['Beginner', 'Intermediate', 'Advanced'];
  BMuscleGroups = [
    {
      name: 'Chest',
      description:
        'We recommend to do 5-6 chest exercises per week. Every exercise 3-4 sets of 6-12 repetitions.',
      img: 'push up.jpg',
    },
    {
      name: 'Back',
      description:
        'We recommend to do 5-6 back exercises per week. Every exercise 3-4 sets of 6-12 repetitions.',
      img: 'seated row.jpg',
    },
    {
      name: 'Legs',
      description:
        'We recommend to do 5-6 legs exercises per week. Every exercise 3-4 sets of 6-12 repetitions.',
      img: 'leg press.jpg',
    },
    {
      name: 'Arms',
      description:
        'We recommend to do 3-4 triceps exercises and 3-4 biceps exercises per week. Every exercise 3-4 sets of 6-12 repetitions.',
      img: 'db curl.jpg',
    },
    {
      name: 'Shoulders and Traps',
      description:
        'We recommend to do 4-5 shoulders exercises and 1-2 traps exercises per week. Every exercise 3-4 sets of 6-12 repetitions.',
      img: 'lateral begin.jpg',
    },
    {
      name: 'Abs',
      description:
        'We recommend to do 4-5 chest exercises per week. Every exercise 3-4 sets, each between 30 and 90 seconds.',
      img: 'sit up.jpg',
    },
  ];
  IMuscleGroups = [
    {
      name: 'Chest',
      description:
        'We recommend to do 5-6 chest exercises per week. Every exercise 3-4 sets of 6-12 repetitions.',
      img: 'bench press.jpg',
    },
    {
      name: 'Back',
      description:
        'We recommend to do 5-6 back exercises per week. Every exercise 3-4 sets of 6-12 repetitions.',
      img: 'pull up.jpg',
    },
    {
      name: 'Legs',
      description:
        'We recommend to do 5-6 legs exercises per week. Every exercise 3-4 sets of 6-12 repetitions.',
      img: 'squats.jpeg',
    },
    {
      name: 'Arms',
      description:
        'We recommend to do 3-4 triceps exercises and 3-4 biceps exercises per week. Every exercise 3-4 sets of 6-12 repetitions.',
      img: 'biceps.jpg',
    },
    {
      name: 'Shoulders and Traps',
      description:
        'We recommend to do 4-5 shoulders exercises and 1-2 traps exercises. Every exercise 3-4 sets of 6-12 repetitions.',
      img: 'lateral raises.jpg',
    },
    {
      name: 'Abs',
      description:
        'We recommend to do 4-5 chest exercises per week. Every exercise 3-4 sets, each between 30 and 90 seconds.',
      img: 'leg raises.jpg',
    },
  ];

  AdvSplits = [
    {
      name: '3 Days Split',
      description:
        'Here is a three days workout plan that targets every muscle group once per week. There is one day of rest between each workout.',
      DaysDescription: 'Day 1: Push, Day 2: Pull, Day 3: Legs.',
      img: 'incline press.jpg',
      id: '3',
    },
    {
      name: '5 Days Split',
      description:
        'Here is a five days workout plan that targets every muscle group twice per week with two resting days.',
      DaysDescription:
        'Day 1: Push, Day 2: Pull, Day 3: Legs, Day 4: Upper, Day 5: Lower.',
      img: 'lat.jpg',
      id: '5',
    },
    {
      name: '6 Days Split',
      description:
        'Here is a six days workout plan that targets every muscle group twice per week with one resting day.',
      DaysDescription:
        'Day 1: Push, Day 2: Pull, Day 3: Legs, Day 4: Push, Day 5: Pull, Day 6: Legs.',
      img: 'deadlift.jpg',
      id: '6',
    },
  ];

  constructor(private data: DataService) {}

  ngOnInit(): void {}

  displayWorkouts(muscleGroup: string, level: string) {
    this.data.displayWorkouts(muscleGroup, level);
  }

  displayAdvWorkouts(id: any) {
    this.data.displayAdvWorkouts(id);
  }
}
