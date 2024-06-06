import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  studentList:any = [];
  constructor(private studentService: StudentService){
     setTimeout(()=>{
      this.getStudents()
     },10000);
  }

  deleteStudentHandler(id:string){
    let answer = prompt("Are you really Want to delete this student?if yes then type 'yes'");
    if(answer==='yes'){
      this.studentService.deleteStudentById(id).subscribe(response=>{
        alert("Student Deleted Successfully");
        this.getStudents();
      })
    }
  }

  getStudents(){
    this.studentService.getStudents().subscribe(response=>{
      this.studentList = response;
    })
  }
}
