import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';



@NgModule({
  declarations: [AddStudentComponent, StudentListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddStudentComponent,
    StudentListComponent
  ]
})
export class StudentModule { }
