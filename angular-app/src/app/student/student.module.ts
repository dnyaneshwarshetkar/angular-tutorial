import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';



@NgModule({
  declarations: [AddStudentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AddStudentComponent
  ]
})
export class StudentModule { }
