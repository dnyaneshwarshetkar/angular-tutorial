import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { StudentContainerComponent } from './components/student-container/student-container.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component: StudentContainerComponent,
    children: [{
      path: "student-list",
      component: StudentListComponent
  }, {
      path: "add-student",
      component: AddStudentComponent
  }, {
    path: "view-student/:id",
    component: ViewStudentComponent
  }]
  }];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class StudentRoutingModule {}