import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.scss'
})
export class ViewStudentComponent {
  student:any;
  constructor(
    private activeRoute: ActivatedRoute,
    private studentService: StudentService
  ){

    console.log(this.activeRoute.params);

    console.log(this.activeRoute.snapshot.params);

    this.studentService.getStudentById(this.activeRoute.snapshot.params['id']).subscribe(
      response=>{
        console.log(response);
        this.student = response;
      }
    )



  }

}
