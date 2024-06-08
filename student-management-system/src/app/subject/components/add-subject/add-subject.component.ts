import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.scss'
})
export class AddSubjectComponent implements OnInit {
  nameControl = new FormControl("John Doe", [
    Validators.required, 
    Validators.maxLength(20), 
    Validators.minLength(4)]);

  subjectForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.minLength(10)]),
    syllabus: new FormControl("", [Validators.required]),
    status: new FormControl("Active", [Validators.required])
  });

    ngOnInit(): void {
      this.nameControl.valueChanges.subscribe(data=>{
        console.log(data);
      });
      this.nameControl.statusChanges.subscribe(data=>{
        console.log(data);
      })
    }

    saveOrUpdateSubject(){
      if(this.subjectForm.valid){
        alert("Subject Created Successfully");
      } else {
        alert("Subject details are invalid");
      }
    }
}
