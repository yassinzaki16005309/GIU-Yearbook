import { Component, input } from '@angular/core';
import { Student } from '../../models/student.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  readonly student = input.required<Student>();
}