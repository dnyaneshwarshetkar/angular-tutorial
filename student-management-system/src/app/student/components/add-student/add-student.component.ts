import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent  {
  studentId = "";
  student = {
    name: "",
    gender: "MALE",
    dob: "",
    mobile: "",
    email: ""
  };

  @ViewChild("formRef") fRef:any;

  addOrUpdate = true;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute){
      console.log("Current Student Id", );
      if(this.route.snapshot.params["id"]){
        this.studentId = this.route.snapshot.params["id"];
        this.addOrUpdate = false;
        this.studentService.getStudentById(this.route.snapshot.params["id"]).subscribe((studentDetails:any)=>{
          this.student = studentDetails;
        })
      }
  }

  addStudent(){
    if(this.fRef.valid){
      console.log(this.student);
      if(this.addOrUpdate){
        this.studentService.createStudent(this.student).subscribe(response=>{
          alert("Student Created Successfully");
        })
      } else {
        this.studentService.updateStudentById(this.studentId,this.student).subscribe(response=>{
          alert("Student Updated Successfully");
        })
      }

    } else {
      alert("Student form is not valid");
    }
  }
}
