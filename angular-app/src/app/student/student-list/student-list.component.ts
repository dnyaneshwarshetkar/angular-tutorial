import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  studentList:any;
  constructor(private studentService: StudentService){

    this.studentList = this.studentService.getStudents();
  }
}
