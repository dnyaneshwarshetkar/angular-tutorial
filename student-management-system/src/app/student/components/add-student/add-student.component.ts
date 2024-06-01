import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent  {
  student = {
    name: "",
    gender: "MALE",
    dob: "",
    mobile: "",
    email: ""
  };

  @ViewChild("formRef") fRef:any;

  constructor(private studentService: StudentService){

  }

  addStudent(){
    if(this.fRef.valid){
      console.log(this.student);
      this.studentService.createStudent(this.student).subscribe(response=>{
        alert("Student Created Successfully");
      })
    } else {
      alert("Student form is not valid");
    }
  }
}
