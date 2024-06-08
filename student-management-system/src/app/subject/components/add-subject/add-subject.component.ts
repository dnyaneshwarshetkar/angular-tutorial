import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

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
    syllabus: new FormArray([this.getChapterForm()]),
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

    getChapterForm(){
      return new FormGroup({
        title: new FormControl("", [Validators.required]),
        weightage:  new FormControl("", [Validators.required]),
        content: new FormControl("", [Validators.required])
      })
    }


    get syllabus() : FormArray {
      return this.subjectForm.get("syllabus") as FormArray;
    }

    plusChapter(){
      this.syllabus.push(this.getChapterForm());
    }

    minusChapter(i:number){
      this.syllabus.removeAt(i);
    }


}
