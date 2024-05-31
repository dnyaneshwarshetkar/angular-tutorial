import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { StudentRoutingModule } from './student.routes';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';



@NgModule({
  declarations: [
    AddStudentComponent,
    StudentListComponent,
    ViewStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule
  ],
  exports: [
    AddStudentComponent,
    StudentListComponent,
    ViewStudentComponent,
    DeleteStudentComponent
  ],
  providers: [StudentService]
})
export class StudentModule { }
